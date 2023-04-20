import React, { useState } from 'react';
import axios from 'axios';

const AddHotel = () => {
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get user id for owner
      const userResponse = await axios.get(`http://localhost:3000/api/user/get/${owner}`);
      const ownerId = userResponse.data.user._id;
  
      // Add hotel using owner id
      const hotelResponse = await axios.post('http://localhost:3000/api/hotel/add', {
        owner: ownerId,
        name,
        location,
        description,
      });
      console.log(hotelResponse.data);
  
      // reset form after successful submission
      setOwner('');
      setName('');
      setLocation('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Owner:
        <input type="text" value={owner} onChange={(event) => setOwner(event.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default AddHotel;
