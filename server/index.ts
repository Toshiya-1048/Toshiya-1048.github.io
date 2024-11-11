import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';
import compression from 'compression';
import { createServer as createViteServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();
  app.use(compression() as express.RequestHandler);

  let vite;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(resolve(__dirname, '../dist/client')));
  }

  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template, render;

      if (!isProduction) {
        template = fs.readFileSync(resolve(__dirname, '../index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = fs.readFileSync(resolve(__dirname, '../dist/client/index.html'), 'utf-8');
        render = (await import('../dist/server/entry-server.js')).render;
      }

      const appHtml = await render(url);
      const html = template.replace('<!--ssr-outlet-->', appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  return { app };
}

createServer().then(({ app }) => {
  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
}); 