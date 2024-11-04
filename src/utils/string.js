export const capitalizeAndFormat = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
};
export const sanitizeString = (str) => {
    return str.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
};
export const truncateString = (str, maxLength) => {
    if (str.length <= maxLength)
        return str;
    return str.slice(0, maxLength) + '...';
};
