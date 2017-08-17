import * as ACTIONS from '../../actions';

const expenses = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EXPENSE_ITEM: {
      const items = state[action.date] ? { ...state[action.date].items } : {};
      // let item = items && items.some(item => item.sno === action.data.sno);
      // item = action.data;
      // for (const i=0; i<items.length; i++) {
      //   if (items[i].sno === action.data.sno) {
      //     items[i] = action.data;
      //     break;
      //   }
      // }
      // if(items.length === 0) {
      //   items.push(action.data);
      // }
      const newItems = { ...items[action.data.sno] };
      console.log(items, newItems, state);
      return { ...state, newItems };
    }
    default:
      return { ...state };
  }
};

export default expenses;
