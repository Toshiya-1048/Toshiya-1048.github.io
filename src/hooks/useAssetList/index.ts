import { useState, useEffect, useCallback } from 'react';
import { AssetInfo } from '../../types';
import { useAssetFetcher } from './useAssetFetcher';
import { MESSAGES } from '../../constants';
import { getCachedAssets, setCachedAssets } from '../../utils/cache';

export const useAssetList = () => {
  const [selectedAsset, setSelectedAsset] = useState<string>('');
  const [assetList, setAssetList] = useState<AssetInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { fetchAssetList } = useAssetFetcher();

  useEffect(() => {
    let mounted = true;
  
    const initialize = async () => {
      setIsLoading(true);
      try {
        // キャッシュからアセットを取得
        const cachedAssets = getCachedAssets();
        if (cachedAssets) {
          console.log(MESSAGES.INFO.CACHE_USED);
          setAssetList(cachedAssets);
          if (cachedAssets.length > 0) {
            setSelectedAsset(cachedAssets[0].name);
          }
          return;
        }
  
        // キャッシュがない場合は新規取得
        const assets = await fetchAssetList();
        if (mounted) {
          setAssetList(assets);
          if (assets.length > 0) {
            setSelectedAsset(assets[0].name);
          }
          setCachedAssets(assets);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };
  
    initialize();
  
    return () => {
      mounted = false;
    };
  }, [fetchAssetList]);

  const getAssetInfo = useCallback((name: string) => {
    return assetList.find(asset => asset.name === name);
  }, [assetList]);

  return {
    selectedAsset,
    setSelectedAsset,
    assetList,
    isLoading,
    getAssetInfo
  };
}; 