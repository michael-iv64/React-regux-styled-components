import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { appReducer } from './appReducer';
import {postReducer} from './postReducer'

export const rootReducer = combineReducers({
    data: dataReducer,
    app: appReducer,
    post: postReducer
})