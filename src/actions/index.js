export const FETCH_PAGE_DETAILS = 'FETCH_PAGE_DETAILS';
export function fetchPageDetails(page, date) {
  return {
    type: `FETCH_${page}_DETAILS`,
    date
  };
}
