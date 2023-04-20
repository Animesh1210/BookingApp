import React, { useState } from 'react';
import axios from 'axios';

const UpdateUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [license, setLicense] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const username = event.target.username.value;

    axios.post(`http://localhost:3000/api/user/update/${username}`, {
      name,
      email,
      license,
      license_number: licenseNumber,
    })
      .then(response => {
        console.log(response.data);
        // Reset the form fields
        setName('');
        setEmail('');
        setLicense('');
        setLicenseNumber('');
      })
      .catch(error => {
        console.log(error);
        alert("User does not exist");
      });
  };

  return (
    <form onSubmit={handleUpdateUser}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </div>
      <div>
        <label>License:</label>
        <input type="text" value={license} onChange={event => setLicense(event.target.value)} />
      </div>
      <div>
        <label>License Number:</label>
        <input type="text" value={licenseNumber} onChange={event => setLicenseNumber(event.target.value)} />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUserForm;
