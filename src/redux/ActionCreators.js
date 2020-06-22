import * as ActionTypes from './ActionTypes';
import { CITIES } from '../shared/cities';

export const AddFeedback = (name, description) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: {

        name: name,
        description: description
    }
});

export const fetchCities = () => (dispatch) => {
    dispatch(citiesLoading(true));

    setTimeout(() => { dispatch(addCities(CITIES)) }, 4000);
};


export const citiesLoading = () => ({
    type: ActionTypes.LOAD_CITIES
});


export const failedCities = (errMess) => ({
    type: ActionTypes.FAILED_CITIES,
    payload: errMess
});

export const addCities = (cities) => ({
    type: ActionTypes.ADD_CITIES,
    payload: cities
});