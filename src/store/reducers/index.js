import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer.js';
import { alert } from './alert.reducer.js';
import { extra } from './extra.js'
import { headers } from './header.reducer.js'
import { footers } from './footer.reducer.js'
const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  extra,
  headers,
  footers
});

export default rootReducer;
