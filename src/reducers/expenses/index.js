import * as ACTIONS from '../../actions';
import { formatDateEntry } from '../../utils';

const expenses = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EXPENSE_ITEM: {
      const date = formatDateEntry(action.date);
      const current = state[date] ? [...state[date]] : [];
      current[action.data.sno - 1] = action.data; // Rather crude? Decrement to maintain array index from 0
      return { ...state, [date]: current };
    }
    default:
      return { ...state };
  }
};

export default expenses;
