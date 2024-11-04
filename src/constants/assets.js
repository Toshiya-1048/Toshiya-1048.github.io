export const ASSET_CONFIG = {
    PATHS: {
        BASE: '/assets',
        ATLAS: '.atlas',
        JSON: '.json'
    },
    VALIDATION: {
        MAX_SIZE: 1024 * 1024 * 10, // 10MB
        ALLOWED_TYPES: ['application/json', 'text/plain'],
        NAME_PATTERN: /^[a-zA-Z0-9-]+$/
    }
};
export const DEFAULT_ASSETS = [
    'alien',
    'chibi-stickers',
    'coin',
    'mix-and-match',
    'owl',
    'powerup',
    'raptor',
    'spineboy',
    'stretchyman',
    'tank',
    'windmill'
];
