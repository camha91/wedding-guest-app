import { ADD_GUEST, DELETE_GUEST, UPDATE_GUEST } from './actions';
import { guests } from './state';

export const reducer = (state = guests, action) => {
    switch (action.type) {

        case ADD_GUEST:
            console.log('reducer ---Adding new guest---');
            return [...state, action.payload];
        case DELETE_GUEST:
            console.log('reducer ---Deleting new guest---');
            return state.filter(guest => guest.id !== action.payload);
        case UPDATE_GUEST:
            console.log('reducer ---Updating new guest---');
            return state.map(guest => 
                                guest.id === action.payload.id ?
                                    guest = action.payload :
                                    guest
            );
        default:
            return state;
    };
};
