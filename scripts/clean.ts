import { rm } from 'fs/promises';
import { join } from 'path';

async function cleanBuild() {
  try {
    await rm(join(process.cwd(), 'dist'), { recursive: true, force: true });
    console.log('Successfully cleaned build directory');
  } catch (error) {
    console.error('Error cleaning build directory:', error);
    process.exit(1);
  }
}

cleanBuild(); 