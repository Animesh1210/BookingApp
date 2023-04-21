import React, { useState } from 'react';
import axios from 'axios';

const UpdateHotel = () => {
  const [hotelId, setHotelId] = useState('');
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const response = await axios.post(`http://localhost:3001/api/hotel/update/${hotelId}`, {
        owner,
        name,
        location,
        description,
      });
      console.log(response.data);
      setOwner('');
      setName('');
      setLocation('');
      setDescription('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hotel ID:
        <input type="text" value={hotelId} onChange={(e) => setHotelId(e.target.value)} />
      </label>
      <br />
      <label>
        Owner:
        <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Update Hotel</button>
    </form>
  );
};

export default UpdateHotel;
