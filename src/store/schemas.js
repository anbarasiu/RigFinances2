import { Schema, arrayOf } from 'normalizr';
const items = Schema('items');
expensesSchema.define({
  expenses: arrayOf(items)
});

export { expensesSchema };
