import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
export const Guests = () => {

    const [guests, setGuests] = useState();
    const nav = useNavigate();

    const handleSwitch = () => {
        nav("/addDish");
    }

    useEffect(() => {
        const getGuests = async () => {
            try {
                const guestList = await axios.get('http://localhost:3001/_api/getGuests');
                console.log("guests", guestList.data.list);
                setGuests(guestList.data.list);
            }
            catch (Err) {
                console.error(Err);
            }
        }

        getGuests();

    },[]);

      
    
    
    return(
        <>
            <div>Guests <button onClick={handleSwitch}>Add Dishes & guest name</button></div>
            <div>
                {guests?.map((guest) => (<p key={guest.id}>{guest.name} - {guest.dishName}</p>))}
        </div>
        </>       
    )
}

