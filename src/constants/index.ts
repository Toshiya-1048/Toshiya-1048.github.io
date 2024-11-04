export * from './cache';
export * from './spine';
export * from './assets';
export * from './messages';

// アプリケーション全体の設定
export const APP_CONFIG = {
  VERSION: '1.0.0',
  ENV: process.env.NODE_ENV || 'development',
  DEBUG: process.env.NODE_ENV !== 'production',
  LOCALE: 'ja-JP'
} as const; 