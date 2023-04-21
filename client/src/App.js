import React from 'react';
import AddUserForm from './components/AddUserForm';
import UpdateUserForm from './components/UpdateUserForm';
import DeleteUser from './components/DeleteUserForm';
import AddHotel from './components/AddHotelForm';
import UpdateHotel from './components/UpdateHotelForm';
import DeleteHotel from './components/DeleteHotelForm';
import Home from './components/home';
import Navbar from './components/navBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    
    <div>
        <Navbar/>
        <div>
          <BrowserRouter>
          <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="addhotel" element={<AddHotel/>}/>
            <Route path="adduser" element={<AddUserForm/>}/>
            <Route path="deletehotel" element={<DeleteHotel/>}/>
            <Route path="deleteuser" element={<DeleteUser/>}/>
            <Route path="updateuser" element={<UpdateUserForm/>}/>
            <Route path="updatehotel" element={<UpdateHotel/>}/>
          </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
};

export default App;
