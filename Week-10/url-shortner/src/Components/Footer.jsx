import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <h3>Shortly</h3>
            </div>
            <div className='main-functions'>
                <div className='features'>
                    <h5>Features</h5>
                    <ul>
                        <li>Url Sharing</li>
                        <li>Url Sharing</li>
                        <li>Url Sharing</li>
                    </ul>
                </div>
                <div className='features'>
                    <h5>Resources</h5>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className='features'>
                    <h5>Company</h5>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>
            <div className='login'>
                <Link to="/ab" >Login</Link>
                <Link to="/ab" >SignUp</Link>
            </div>
        </div>
    )
}

export default Footer