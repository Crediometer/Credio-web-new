import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Dialogues.css";
import Chatpage from "./Chatpage";
import useFetch from "./useFetch";

import { connect } from "react-redux";
const Dialogues = ({ profileData }) => {
  // const {data}= useFetch(`https://credio-api.herokuapp.com/chat`)
  const [sidebar, setSidebar] = useState(false);
  const [peopleList, setPeopleList] = useState([]);
  const [username, setUsername] = useState("");
  const [room, setroom] = useState("");
  const [showchat, setShowchat] = useState(false);
  const [chat, setChats] = useState([]);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  console.log("profileData ", profileData);

  return (
    <div className="dialogues body">
      <Navbar />
      <div className="app-container">
        <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} />
        {/* {!showchat ? */}
        <div className="body-inner">
          <div className="dashboard-top nairaaccount-top">
            <div className="navbar-mobile empty" onClick={toggleSidebar}>
              <FaBars />
            </div>
            <div className="account-top">
              <p>Dialogues</p>
            </div>
            <div className="dashboard-notification">
              <IoNotifications />
            </div>
          </div>
          <div className="dialogue-body">
            {profileData.people
              .filter((e) => e.chats.length > 0)
              .map((e, index) => (
                <Link to="/chat" key={index}>
                  <div className="messages">
                    <div className="message-sender">
                      <div className="sender-image"></div>
                      <p className="sender-name">{e.person.businessName}</p>
                    </div>
                    <p className="message-time">{e.chats[e.chats.length -1].createdAt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* // :
                // (<Chatpage socket={socket} username={username} room={room}/> )} */}
      </div>
    </div>
  );
};

const mapStoreToProps = (state) => {
  console.log("states   ", state);
  return {
    profileData: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStoreToProps, mapDispatchToProps)(Dialogues);
