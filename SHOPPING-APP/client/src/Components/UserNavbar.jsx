import React from 'react'
import { Link } from 'react-router-dom'
import './UserNavbar.css'

const UserNavbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-brand">
        Welcome User
      </div>
      <div className="navbar-links">
        <Link to="/user/dashboard">Dashboard</Link>
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/cart">Cart</Link>
        <Link to="/logout">Logout</Link>  
      </div>
    </nav>
  )
}

export default UserNavbar