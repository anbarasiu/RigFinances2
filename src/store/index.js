import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from '../reducers';

/* Create Redux Store */

const store = createStore(reducers, {}, devToolsEnhancer());

export default store;
