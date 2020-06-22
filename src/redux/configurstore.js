import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Cities } from './cities';
import { Leaders } from './leaders';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            cities: Cities,
            leaders: Leaders,
            comments: Comments
        }),
        applyMiddleware(thunk, logger)

    );
    return store;
};