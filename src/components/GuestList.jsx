// rafce

import React from 'react';
import GuestItem from './GuestItem';
import { useSelector } from 'react-redux'

const GuestList = () => {
    const guests = useSelector(state => state);
    return (
        <div className="my-4">
            {guests.map((guest, index) => {
                return <GuestItem key={guest.id} guest={guest} pos={index+1}/>
            })}
        </div>
    )
}

export default GuestList
