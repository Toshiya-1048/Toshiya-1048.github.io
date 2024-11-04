import { AssetInfo, AssetValidationResult } from '../types';
import { createError } from './error';

export const createAssetInfo = (name: string): AssetInfo => ({
  name,
  atlasUrl: `/assets/${name}.atlas`,
  jsonUrl: `/assets/${name}.json`
});

export const validateAssetResponse = async (response: Response): Promise<AssetValidationResult> => {
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return { isValid: true };
  } catch (error) {
    return {
      isValid: false,
      error: createError('Asset validation failed', error)
    };
  }
};

export const isValidAssetName = (name: string): boolean => {
  return /^[a-zA-Z0-9-]+$/.test(name);
};

export const getAssetPath = (name: string, type: 'atlas' | 'json'): string => {
  return `/assets/${name}.${type}`;
}; 