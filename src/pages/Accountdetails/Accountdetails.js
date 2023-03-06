import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Mastercard from "../../Components/Mastercard/Mastercard";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Accountdetails.css';
import { connect } from "react-redux";
import { fetchProfile } from "../../Redux/Profile/ProfileAction";
const Accountdetails = ({ profileData,fetchProfile}) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    return ( 
        <div className="accountdetails">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Account details</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="accountdetails-body">
                        <div className="account-card">
                            <div className="account-card-inner account-card-details">
                                <Mastercard/>
                            </div>
                        </div>
                        <div className="bank-account-details">
                            {profileData && profileData?.profile && (
                                <div className="bank-account-details-inner">
                                    <div className="sub-account-details">
                                        <p className="detail-topic">Tier level</p>
                                        <p className="detail-result">{profileData?.profile?.message?.profile?.bvn.levelOfAccount ??"********"}</p>
                                    </div>
                                    <div className="sub-account-details">
                                        <p className="detail-topic">BVN</p>
                                        <p className="detail-result">{profileData?.profile?.message?.profile?.vaults.bvn ??"********"}</p>
                                    </div>
                                    <div className="sub-account-details">
                                        <p className="detail-topic">Director’s Name </p>
                                        <p className="detail-result">{profileData?.profile?.message?.profile?.bvn.lastName ??"********"} {profileData?.profile?.message?.profile?.bvn.firstName ??"********"} {profileData?.profile?.message?.profile?.bvn.middleName ??"********"}</p>
                                    </div>
                                    <div className="sub-account-details">
                                        <p className="detail-topic">Account Type</p>
                                        <p className="detail-result">{profileData?.profile?.message?.profile?.vaults.accountType ??"********"} Account</p>
                                    </div>
                                    <div className="sub-account-details">
                                        <p className="detail-topic">Bank Name </p>
                                        <p className="detail-result">SAFE HEAVEN MFB</p>
                                    </div>
                                    <div className="sub-account-details">
                                        <p className="detail-topic">Status </p>
                                        <p className="detail-result">{profileData?.profile?.message?.profile?.vaults.status ??"********"} </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      profileData: state.profile
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProfile: () => dispatch(fetchProfile())
    };
  };

export default connect(mapStoreToProps, mapDispatchToProps)(Accountdetails);