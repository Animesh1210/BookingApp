import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [license, setLicense] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/api/user/add', {
      name,
      username,
      email,
      license,
      license_number: licenseNumber,
    })
      .then(response => {
        console.log(response.data);
        // Reset the form fields
        setName('');
        setUsername('');
        setEmail('');
        setLicense('');
        setLicenseNumber('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
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
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
