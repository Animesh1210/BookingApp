import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import './css/Hotelform.css';

const AddHotel = () => {
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   // Get user id for owner
    //   const userResponse = await axios.get(`http://localhost:3000/api/user/get/${owner}`);
    //   const ownerId = userResponse.data.user._id;
  
      // Add hotel using owner id
      const hotelResponse = await axios.post('http://localhost:3001/api/hotel/add', {
        owner: owner,
        name,
        location,
        description,
      });
      console.log(hotelResponse.data);
  
    //   // reset form after successful submission
    //   setOwner('');
    //   setName('');
    //   setLocation('');
    //   setDescription('');
    // } catch (error) {
    //   console.error(error);
    // }
    console.log({owner,name,location,description})
  };

  

  return (
    <div className='main-container'>
    <form onSubmit={handleSubmit}>
      <div>
      <label>
        Owner:
        <input type="text" value={owner} onChange={(event) => setOwner(event.target.value)} />
      </label>
      </div>
      <br />
      <div>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      </div>
      <br />
      <div>
      <label>
        Location:
        <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
      </label>
      </div>
      <br />
      <div>
      <label>
        Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      </div>
      <br />
      <div>
      <button type="submit" >Add Hotel</button>
     <button onClick={()=>navigate("/deletehotel")}>Delete Hotel</button>
     <button onClick={()=>navigate("/updatehotel")}>Update Hotel</button>
      </div>
    </form>
    </div>
  );
};

export default AddHotel;
