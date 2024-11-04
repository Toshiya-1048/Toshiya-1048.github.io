import { createError } from './error';
export const createAssetInfo = (name) => ({
    name,
    atlasUrl: `/assets/${name}.atlas`,
    jsonUrl: `/assets/${name}.json`
});
export const validateAssetResponse = async (response) => {
    try {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return { isValid: true };
    }
    catch (error) {
        return {
            isValid: false,
            error: createError('Asset validation failed', error)
        };
    }
};
export const isValidAssetName = (name) => {
    return /^[a-zA-Z0-9-]+$/.test(name);
};
export const getAssetPath = (name, type) => {
    return `/assets/${name}.${type}`;
};
