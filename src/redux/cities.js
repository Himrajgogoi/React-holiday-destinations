import { CITIES } from '../shared/cities';
import * as ActionTypes from './ActionTypes';
import { AddFeedback } from './ActionCreators';

export const Cities = (state = {
    isLoading: true,
    errMess: null,
    cities: []
}, action) => {
    switch (action.type) {

        case ActionTypes.LOAD_CITIES:
            return {...state, isLoading: true, errmess: null, cities: [] };

        case ActionTypes.FAILED_CITIES:
            return {...state, isLoading: false, errMess: action.payload, cities: [] };
        case ActionTypes.ADD_CITIES:
            return {...state, isLoading: false, errMess: null, cities: action.payload };

        default:
            return state;
    }
};