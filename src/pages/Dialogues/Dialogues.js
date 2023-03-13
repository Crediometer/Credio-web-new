
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Dialogues.css';
import Chatpage from './Chatpage';
import useFetch from "./useFetch";



const Dialogues = ({socket}) => {
    // const {data}= useFetch(`https://credio-api.herokuapp.com/chat`)
    const [sidebar, setSidebar] = useState(false);
    const [peopleList, setPeopleList] = useState([])
    const [username, setUsername] = useState('')
    const [room, setroom] = useState('')
    const [showchat, setShowchat] = useState(false)
    const [chat, setChats] = useState([])
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    const joinroom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowchat(true);
        }
    }
    // useEffect(()=>{
    //     socket.on("onPeople", (data)=>{
    //         // console.log(data)
    //         setPeopleList((list) => [...list, data])
    //     });
    // }, [socket])

    return ( 
        <div className="dialogues body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
               {!showchat ?
                (<div className="body-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Dialogues</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="dialogue-body">
                        <div className="test-chat">
                            <input type='text' placeholder="john ...." onChange={(e) => {setUsername(e.target.value)}}/>
                            <input type='text' placeholder="Room ID...." onChange={(e) => {setroom(e.target.value)}}/>
                            <button onClick={joinroom }>join a room</button>
                        </div>
                        <Link to='/chat'>
                            <div className="messages">
                                <div className="message-sender">
                                    <div className="sender-image"></div>
                                    <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                                </div>
                                <p className="message-time">16-01-2023</p>
                            </div>
                        </Link>
                    </div>
                </div>)
                :
                (<Chatpage socket={socket} username={username} room={room}/> )}
            </div>
        </div>
    );
}
 
export default Dialogues;