import { combineReducers } from 'redux';

import auth from './auth_reducer';
import expense from './expense_reducer';
import errors from './error_reducer';
import user from './user_reducer';


export default combineReducers({
    auth,
    expense,
    errors,
    user
});