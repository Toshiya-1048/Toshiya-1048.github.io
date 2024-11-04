// キャッシュ操作用のユーティリティ
import { AssetInfo, CachedAssetData } from '../types';
import { CACHE } from '../constants';
import { createError, logError } from './error';

/**
 * アセットのキャッシュデータを取得
 */
export const getCachedAssets = (): AssetInfo[] | null => {
  try {
    const cached = localStorage.getItem(CACHE.KEYS.ASSET_LIST);
    if (!cached) return null;

    const parsedData = JSON.parse(cached) as CachedAssetData;
    
    // キャッシュの有効期限をチェック
    if (Date.now() - parsedData.timestamp > CACHE.DURATION.ASSETS) {
      localStorage.removeItem(CACHE.KEYS.ASSET_LIST);
      return null;
    }

    return parsedData.assets;
  } catch (error) {
    logError(createError('キャッシュの取得に失敗しました', error), 'Cache');
    localStorage.removeItem(CACHE.KEYS.ASSET_LIST);
    return null;
  }
};

/**
 * アセットをキャッシュに保存
 */
export const setCachedAssets = (assets: AssetInfo[]): void => {
  try {
    // キャッシュサイズの制限をチェック
    if (assets.length > CACHE.MAX_SIZE.ASSETS) {
      assets = assets.slice(0, CACHE.MAX_SIZE.ASSETS);
    }

    const cacheData: CachedAssetData = {
      assets,
      timestamp: Date.now()
    };
    
    localStorage.setItem(CACHE.KEYS.ASSET_LIST, JSON.stringify(cacheData));
  } catch (error) {
    logError(createError('キャッシュの保存に失敗しました', error), 'Cache');
  }
};

/**
 * 特定のキャッシュを削除
 */
export const removeCachedAssets = (): void => {
  try {
    localStorage.removeItem(CACHE.KEYS.ASSET_LIST);
  } catch (error) {
    logError(createError('キャッシュの削除に失敗しました', error), 'Cache');
  }
};

/**
 * すべてのキャッシュをクリア
 */
export const clearAllCache = (): void => {
  try {
    Object.values(CACHE.KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    logError(createError('キャッシュのクリアに失敗しました', error), 'Cache');
  }
};

/**
 * キャッシュの有効性をチェック
 */
export const isValidCache = (timestamp: number, duration: number): boolean => {
  return Date.now() - timestamp <= duration;
}; 