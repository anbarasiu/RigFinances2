import { combineReducers } from 'redux';
import expenses from './expenses';
import bore from './bore';
import employee from './employee';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const reducers = combineReducers({
  expenses,
  bore,
  employee
});

export default reducers;
