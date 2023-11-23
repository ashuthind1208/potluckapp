import { useState, useEffect } from 'react'
import axios from 'axios';
export const Guests = () => {

    const [guests,setGuests] = useState()

    useEffect(() => {
        const getGuests = async () => {
            try {
                const guestList = await axios.get('http://localhost:3001/_api/getGuests');
                console.log("guests",guestList);
                setGuests(guestList);
            }
            catch (Err) {
                console.error(Err);
            }
        }

        getGuests();

    },[]);

      
    
    
    return(
        <>
            <div>Guests</div>
            <div>
                {console.log(guests)}
                {guests.data.list.map((guest) => (<p>{ guest.name }</p>))}
        </div>
        </>       
    )
}

