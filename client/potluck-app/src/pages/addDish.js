import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

export const AddDish = () => { 

    const [guestName, setGuestName] = useState("");
    const [dishName, setDishName] = useState("");
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/_api/addGuests', {
                name: guestName,
                dishName
            });
            alert("dish created");
            nav("/guests");
        }
        catch (Err) {
            console.error(Err);
        }


    }

    return (<>
        <div>Add Dishes</div>
        <br/>
        <div>
            <form>
                <label htmlFor="guestName">Guest Name</label>
                <input type='text' name="guestName" value={guestName} onChange={(e) => { setGuestName(e.target.value) }}  />
                <br/>
                <label htmlFor="dishName">Dish Name</label>
                <input type='text' name="dishName" value={dishName} onChange={(e)=>{setDishName(e.target.value)}} />
                <br/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </>)
}