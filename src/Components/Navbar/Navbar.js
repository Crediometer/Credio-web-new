import './Navbar.css'
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import {BsBell} from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
// import useFetch from '../../useFetch';
const Navbar = () => {
    // const {data: profile, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/user/getProfile`);
    return ( 
        <div className="navbar">
            <div className="navbar-inner">
                <div className="logo">
                    <p className="logo-text">Credio</p>
                </div>
                <div className="profile-side">
                    <div className="bell">
                        <BsBell/>
                    </div>
                        <div className="profile-pic">
                            <div className="navbar-image">
                                <img src='https://source.unsplash.com/random/?People/'></img>
                            </div>
                            <div className="navbar-name">
                                <p className='greeting'>Good day</p>
                                <p className="name">Dear Ibrarch</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="navbar-mobile">
                <FaBars/>
            </div>
        </div>
     );
}
 
export default Navbar;