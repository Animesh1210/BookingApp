import React, { useState } from 'react';
import axios from 'axios';

const DeleteHotel = () => {
  const [hotelName, setHotelName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/hotel/delete/${hotelName}`);
      // console.log(response.data);
      // reset form after successful submission
      setHotelName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hotel name:
        <input type="text" value={hotelName} onChange={(event) => setHotelName(event.target.value)} />
      </label>
      <br />
      <button type="submit">Delete Hotel</button>
    </form>
  );
};

export default DeleteHotel;
