import { SpinePlayerOptions } from '../types';

export const validateSpineOptions = (options: Partial<SpinePlayerOptions>): boolean => {
  const requiredFields: (keyof SpinePlayerOptions)[] = ['jsonUrl', 'atlasUrl', 'viewport'];
  return requiredFields.every(field => field in options);
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}; 