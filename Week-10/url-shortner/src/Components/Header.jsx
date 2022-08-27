import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div>
        <h2>Shortly</h2>
      </div>
      <div>
        <Link to="/ab" >Features</Link>
        <Link to="/ab" >Pricing</Link>
        <Link to="/ab" >Resources</Link>
      </div>
      <div>
        <Link to="/ab" >Login</Link>
        <Link to="/ab" >SignUp</Link>
      </div>
    </div>
  )
}

export default Header