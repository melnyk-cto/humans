import { handleActions } from 'redux-actions';
import { humansActions } from './actions';

const initialState = {
    data: {},
};

export const humansReducer = handleActions({
        [humansActions.setHumans]: (state, {payload}) => ({
            ...state,
            data: payload,
        })
    },
    initialState,
);