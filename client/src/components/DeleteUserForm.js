import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [username, setUsername] = useState('');

  const handleDeleteUser = (event) => {
    event.preventDefault();

    axios.get(`http://localhost:3000/api/user/delete/${username}`)
      .then(response => {
        console.log(response.data);
        // Reset the form fields
        setUsername('');
        alert("User Deleted!");
      })

      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleDeleteUser}>
      <div>
        <label>Delete User:</label>
        <input type="text" placeholder="Enter username" value={username} onChange={event => setUsername(event.target.value)} />
      </div>
      <button type="submit">Delete User</button>
    </form>
  );
};

export default DeleteUser;
