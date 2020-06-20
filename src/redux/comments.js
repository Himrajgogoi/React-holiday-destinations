import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            feedback.id = state.length;
            return state.concat(feedback);

        default:
            return state;
    }
}