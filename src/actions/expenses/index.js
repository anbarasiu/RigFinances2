export const UPDATE_EXPENSE_ITEM = 'UPDATE_EXPENSE_ITEM';
export function updateExpenseItem(date, data) {
  return {
    type: UPDATE_EXPENSE_ITEM,
    date,
    data
  };
}
