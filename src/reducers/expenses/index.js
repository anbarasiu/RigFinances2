import * as ACTIONS from '../../actions';

const expenses = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EXPENSE_ITEM:
      const items = state[action.date] && { ...state[action.date].items };
      let item = items && items.some(item => item.sno === action.data.sno);
      item = action.data;
      return { ...state, items };

    default:
      return { ...state };
  }
};

export default expenses;
