import { combineReducers } from 'redux';
import uiReducer from './Ui';

const Reducer = combineReducers({
  ui: uiReducer
});

export default Reducer;
