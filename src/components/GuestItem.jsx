// rafce

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteGuest, updateGuest } from '../redux/actions';

const GuestItem = ({ guest, pos }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(guest.name);
    const [editable, setEdit] = useState(false);
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{pos}</div>
                <div className="col">
                    {
                        editable ? 
                            <input 
                                type="text"
                                value={name}
                                onChange={
                                    (e) => {
                                        setName(e.target.value)
                                    }
                                }
                            /> :
                            <h4>{guest.name}</h4>
                    }
                </div>
                <button
                onClick={() => {
                    if (editable) {
                        dispatch(
                            updateGuest(
                                {
                                    id: guest.id,
                                    name: name
                                }
                            )
                        )
                    }
                    setEdit(!editable);
                }}
                className="btn btn-primary m-2"
                >{ editable ? 'Update' : 'Edit' }</button>
                <button 
                onClick={() => dispatch(deleteGuest(guest.id))}
                className="btn btn-danger m-2"
                >Delete</button>
            </div>
        </div>
    )
}

export default GuestItem
