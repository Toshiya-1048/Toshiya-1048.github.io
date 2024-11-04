export const capitalizeAndFormat = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
  };

export const sanitizeString = (str: string): string => {
  return str.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
};

export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};