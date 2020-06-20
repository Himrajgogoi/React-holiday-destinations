import { CITIES } from '../shared/cities';
import * as ActionTypes from './ActionTypes';
import { AddFeedback } from './ActionCreators';

export const Cities = (state = CITIES, action) => {
    switch (action.type) {
        default: return state;
    }
};