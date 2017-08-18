import * as ACTIONS from '../../actions';
import { formatDateEntry } from '../../utils';

const employee = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EMPLOYEE_ITEM: {
      const date = formatDateEntry(action.date);
      const current = { ...state[date] };
      const item = Object.assign({}, current, action.data);
      console.log(state);
      return { ...state, [date]: item };
    }
    default:
      return { ...state };
  }
};

export default employee;
