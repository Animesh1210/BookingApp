import React, { useState } from 'react';
import axios from 'axios';

const DeleteHotel = () => {
  const [hotelId, setHotelId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/hotel/delete/${hotelId}`);
      console.log(response.data);
      // reset form after successful submission
      setHotelId('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hotel ID:
        <input type="text" value={hotelId} onChange={(event) => setHotelId(event.target.value)} />
      </label>
      <br />
      <button type="submit">Delete Hotel</button>
    </form>
  );
};

export default DeleteHotel;
