import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer.js';
import { alert } from './alert.reducer.js';
import { extra } from './extra.js'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  extra
});

export default rootReducer;
