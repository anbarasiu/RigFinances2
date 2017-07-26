import * as ACTIONS from '../../actions';

const expenses = (state = {}, action) => {

  switch (action.type) {

    case ACTIONS.FETCH_EXPENSES_DETAILS:
      return {...state};

    default:
      return {...state};
  }
};

export default expenses;
