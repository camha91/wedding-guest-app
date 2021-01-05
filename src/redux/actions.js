export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const UPDATE_GUEST = 'UPDATE_GUEST';

export const addGuest = (guest) => ({
    type: ADD_GUEST,
    payload: guest
});

export const deleteGuest = (guestId) => ({
    type: DELETE_GUEST,
    payload: guestId
});

export const updateGuest = (guest) => ({
    type: UPDATE_GUEST,
    payload: guest
});
