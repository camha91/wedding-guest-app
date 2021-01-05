// rafce
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGuest } from '../redux/actions';
import  { v1 as uuid } from 'uuid';

const GuestInput = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    return (
        <div>
            <div className="row m-2">
                <input 
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text" 
                className="col form-control"/>
                <button 
                onClick={() => {
                    dispatch(
                        addGuest(
                        {
                            id: uuid(),
                            name: name
                        }
                    ));
                    setName('');
                    }
                }
                className="btn btn-primary mx-2"
                >Add Guest</button>
            </div>
        </div>
    )
}

export default GuestInput
