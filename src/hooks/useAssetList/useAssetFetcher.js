import { useCallback } from 'react';
import { DEFAULT_ASSETS } from '../../constants';
import { createAssetInfo, validateAssetResponse } from '../../utils/asset';
import { logError, createError } from '../../utils/error';
export const useAssetFetcher = () => {
    const fetchAssetList = useCallback(async () => {
        try {
            const assetInfos = await Promise.all(DEFAULT_ASSETS.map(async (name) => {
                try {
                    const atlasResponse = await fetch(`/assets/${name}.atlas`);
                    if (await validateAssetResponse(atlasResponse)) {
                        return createAssetInfo(name);
                    }
                    return null;
                }
                catch (error) {
                    logError(createError(`Error checking asset ${name}`, error), 'AssetFetcher');
                    return null;
                }
            }));
            return assetInfos.filter((asset) => asset !== null);
        }
        catch (error) {
            logError(createError('Error fetching asset list', error), 'AssetFetcher');
            return [];
        }
    }, []);
    return { fetchAssetList };
};
