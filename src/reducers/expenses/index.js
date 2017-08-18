import * as ACTIONS from '../../actions';
import { formatDateEntry } from '../../utils';

const expenses = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EXPENSE_ITEM: {
      const date = formatDateEntry(action.date);
      const current = { ...state[date] };
      const item = Object.assign({}, current, action.data);
      console.log(JSON.stringify(state));
      return { ...state, [date]: item };
    }
    default:
      return { ...state };
  }
};

export default expenses;
