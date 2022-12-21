export const getAbsoluteUrlPath = (url: string): string => {
  const [, path] = String(url).match(/^https?:\/\/[^/]+(.+)$/) || [];
  return path || url;
};
