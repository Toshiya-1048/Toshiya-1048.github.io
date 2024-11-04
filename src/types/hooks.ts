import { AssetInfo } from './asset';
import { SpinePlayerInstance } from './spine';

export interface UseAssetListReturn {
  selectedAsset: string;
  setSelectedAsset: (asset: string) => void;
  assetList: AssetInfo[];
  isLoading: boolean;
  getAssetInfo: (name: string) => AssetInfo | undefined;
}

export interface UseSpinePlayerReturn {
  initializePlayer: () => SpinePlayerInstance | null;
  cleanupPlayer: (player: SpinePlayerInstance | null) => void;
}

export interface UseSpineResourcesReturn {
  isLoaded: boolean;
  error: Error | null;
} 