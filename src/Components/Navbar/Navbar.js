import './Navbar.css'
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import {BsBell} from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { connect } from "react-redux";
import { fetchProfile } from "../../Redux/Profile/ProfileAction";
// import useFetch from '../../useFetch';
const Navbar = ({ profileData,fetchProfile}) => {
    
    return ( 
        <div className="navbar">
            {profileData && profileData?.profile && (
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
                                    <img src={profileData?.message?.profile?.profilePicture ?? "********"}></img>
                                </div>
                                <div className="navbar-name">
                                    <p className='greetings'>Good day</p>
                                    <p className="name">Dear {profileData?.profile?.message?.profile?.businessName ??"********"}</p>
                                </div>
                            </div>
                    </div>
                </div>
            )}
            <div className="navbar-mobiles">
                <FaBars/>
            </div>
        </div>
     );
}

const mapStoreToProps = (state) => {
console.log("states   ", state);
return {
    profileData: state.profile,
};
};

const mapDispatchToProps = (dispatch) => {
return {
    fetchProfile: () => dispatch(fetchProfile()),
};
};

export default connect(mapStoreToProps, mapDispatchToProps)(Navbar);