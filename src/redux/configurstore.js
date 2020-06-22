import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Cities } from './cities';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { initialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            cities: Cities,
            leaders: Leaders,
            comments: Comments,
            ...createForms({
                feedback: initialFeedback
            })
        }),
        applyMiddleware(thunk, logger)

    );
    return store;
};