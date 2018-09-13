import {combineReducers} from 'redux';

import profile from './profileReducer';
import user from './userReducer';

export default combineReducers({
    profiles:profile,
    users:user,
});