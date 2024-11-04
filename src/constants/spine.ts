// Spine関連の定数を分離
export const SPINE_CONFIG = {
  VIEWPORT: {
    WIDTH: 800,
    HEIGHT: 600,
    PAD: '50%',
    DEBUG: false,
    MIN_SCALE: 0.1,
    MAX_SCALE: 2.0
  },
  PLAYER: {
    SCALE: 0.5,
    BG_COLOR: '#000000',
    SHOW_CONTROLS: true,
    CENTER: true,
    DEFAULT_FPS: 30
  },
  RESOURCES: {
    BASE_URL: 'https://unpkg.com/@esotericsoftware/spine-player@4.2.*',
    SCRIPT_PATH: '/dist/iife/spine-player.js',
    STYLE_PATH: '/dist/spine-player.css',
  }
} as const;

export const SPINE_URLS = {
  SCRIPT: `${SPINE_CONFIG.RESOURCES.BASE_URL}${SPINE_CONFIG.RESOURCES.SCRIPT_PATH}`,
  STYLE: `${SPINE_CONFIG.RESOURCES.BASE_URL}${SPINE_CONFIG.RESOURCES.STYLE_PATH}`,
} as const; 