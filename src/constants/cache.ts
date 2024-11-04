export const CACHE = {
  KEYS: {
    ASSET_LIST: 'spine-asset-list',
  },
  DURATION: {
    ASSETS: 1000 * 60 * 60, // 1時間
    SESSION: 1000 * 60 * 30, // 30分
  },
  MAX_SIZE: {
    ASSETS: 100, // 最大アセット数
  }
} as const; 