// アセット関連の型定義
export interface AssetInfo {
  name: string;
  atlasUrl: string;
  jsonUrl: string;
}

export interface CachedAssetData {
  assets: AssetInfo[];
  timestamp: number;
}

export interface AssetValidationResult {
  isValid: boolean;
  error?: Error;
}