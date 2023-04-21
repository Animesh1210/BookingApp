import React from "react";
import './css/Navbar.css'

const Navbar=()=>{
    return (
        <>
            <div className="main-frame">
                <div className="Navbar-content">
                <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="addhotel">AddHotel</a></li>
                <li><a href="adduser">AddUserForm</a></li>
             
                </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;