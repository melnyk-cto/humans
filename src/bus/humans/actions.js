import {createActions} from 'redux-actions';


export const humansActions = createActions(
    {
        // Sync
        SET_HUMANS: status => status,

        // Async
        GET_HUMANS_ASYNC: void 0,

    },
    {
        prefix: 'Humans',
        namespace: '.',
    },
);
