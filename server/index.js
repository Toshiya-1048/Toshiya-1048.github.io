import express from 'express';
const app = express();

// ポート番号を設定
const PORT = 9000;

// ルートパスへのGETリクエストに対するハンドラ
app.get('/', (req, res) => {
  res.send('Hello world');
});

// サーバーの起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 