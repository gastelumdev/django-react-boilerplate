import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import users from './users';

export default combineReducers({
    leads,
    errors,
    messages,
    auth,
    users
});