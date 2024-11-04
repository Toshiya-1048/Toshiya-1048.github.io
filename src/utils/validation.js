export const validateSpineOptions = (options) => {
    const requiredFields = ['jsonUrl', 'atlasUrl', 'viewport'];
    return requiredFields.every(field => field in options);
};
export const validateUrl = (url) => {
    try {
        new URL(url);
        return true;
    }
    catch {
        return false;
    }
};
