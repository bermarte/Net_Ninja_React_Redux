import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

//what we want to pass to the store
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;