export const SEARCH_PAGE = '/search';

export const removeTags = (text: string): string => {
  return text?.replace(/(<([^>]+)>)/gi, '');
};
