import * as ActionTypes from './ActionTypes';

export const AddFeedback = (name, description) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: {

        name: name,
        description: description
    }
});