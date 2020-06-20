import { createStore, combineReducers } from 'redux';
import { Cities } from './cities';
import { Leaders } from './leaders';
import { Comments } from './comments';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            cities: Cities,
            leaders: Leaders,
            comments: Comments
        })

    );
    return store;
};