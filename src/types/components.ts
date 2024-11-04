// コンポーネント関連の型定義
import { AssetInfo } from './asset';

export interface SpinePlayerProps {
  selectedAsset: string;
  assetInfo: AssetInfo;
}

export interface AssetSelectorProps {
  selectedAsset: string;
  assetList: AssetInfo[];
  onAssetChange: (assetName: string) => void;
}

export interface LoadingIndicatorProps {
  message?: string;
}

export interface ErrorMessageProps {
  message: string;
} 