// export const FETCH_PAGE_DETAILS = 'FETCH_PAGE_DETAILS';
// export function fetchPageDetails(page, date) {
//   return {
//     type: `FETCH_${page}_DETAILS`,
//     date
//   };
// }

export const UPDATE_EXPENSE_ITEM = 'UPDATE_EXPENSE_ITEM';
export function updateExpenseItem(date, data) {
  return {
    type: UPDATE_EXPENSE_ITEM,
    date,
    data
  };
}

export const UPDATE_BORE_ITEM = 'UPDATE_BORE_ITEM';
export function updateBoreItem(date, data) {
  return {
    type: UPDATE_BORE_ITEM,
    date,
    data
  };
}

export const UPDATE_EMPLOYEE_ITEM = 'UPDATE_EMPLOYEE_ITEM';
export function updateEmployeeItem(date, data) {
  return {
    type: UPDATE_EMPLOYEE_ITEM,
    date,
    data
  };
}

// export * from './expenses';
