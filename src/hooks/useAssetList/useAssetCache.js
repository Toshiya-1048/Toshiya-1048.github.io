import { useCallback } from 'react';
import { CACHE } from '../../constants';
import { createError, logError } from '../../utils/error';
export const useAssetCache = () => {
    const getCachedAssets = useCallback(() => {
        try {
            const cached = localStorage.getItem(CACHE.KEYS.ASSET_LIST);
            if (!cached)
                return null;
            const parsedData = JSON.parse(cached);
            if (Date.now() - parsedData.timestamp > CACHE.DURATION.ASSETS) {
                localStorage.removeItem(CACHE.KEYS.ASSET_LIST);
                return null;
            }
            return parsedData.assets;
        }
        catch (error) {
            logError(createError('Failed to get cached assets', error), 'Cache');
            localStorage.removeItem(CACHE.KEYS.ASSET_LIST);
            return null;
        }
    }, []);
    const setCachedAssets = useCallback((assets) => {
        try {
            const cacheData = {
                assets,
                timestamp: Date.now()
            };
            localStorage.setItem(CACHE.KEYS.ASSET_LIST, JSON.stringify(cacheData));
        }
        catch (error) {
            logError(createError('Failed to set cached assets', error), 'Cache');
        }
    }, []);
    return { getCachedAssets, setCachedAssets };
};
