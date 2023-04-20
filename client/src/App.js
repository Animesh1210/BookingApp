import React from 'react';
import AddUserForm from './components/AddUserForm';
import UpdateUserForm from './components/UpdateUserForm';
import DeleteUser from './components/DeleteUserForm';
import AddHotel from './components/AddHotelForm';
import UpdateHotel from './components/UpdateHotelForm';
import DeleteHotel from './components/DeleteHotelForm';

const App = () => {
  return (
    <div>
      <h1>Add User</h1>
      <AddHotel/>
      <h1>Update User</h1>
      <UpdateHotel/>
      <h1>DeleteHotel</h1>
      <DeleteHotel/>
    </div>
  );
};

export default App;
