import { CITIES } from '../shared/cities';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    cities: CITIES,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};