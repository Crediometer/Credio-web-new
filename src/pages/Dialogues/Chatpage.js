import { useEffect, useState } from "react";
import { FaChevronLeft, FaPaperPlane } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ScrollToBottom from 'react-scroll-to-bottom'
import './Chatpage.css'
const Chatpage = ({socket, username, room}) => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([])
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    const sendmessage =async() => {
        if (currentMessage !== ''){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":"+new Date(Date.now()).getMinutes() 
            }

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData])
            setCurrentMessage("")
        }
    }

    useEffect(()=>{
        socket.on("receive_message", (data)=>{
            // console.log(data)
            setMessageList((list) => [...list, data])
        });
    }, [socket])

    return ( 
        // <div className="chatpage">
        //     {/* <Navbar/> */}
        //     <div className="app-container">
                <div className="body-inner chat-inner">
                    <div className="chat-top">
                        <div className="chat-top-left">
                            <FaChevronLeft/>
                        </div>
                        <div className="chat-top-right">
                            <div className="chat-image sender-image">

                            </div>
                            <div className="chat-sender">
                                <p className="chat-sender-name">BLESSED TASTE</p>
                                <p className="chat-sender-number">16-01-2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-messages">
                        <ScrollToBottom className="message-container">
                            {messageList.map((messageContent)=>{
                                return (
                                    <div className="message" id={username === messageContent.author ? 'you' : 'other'}>
                                        <div>
                                            <div className="message-content">
                                                <p>{messageContent.message}</p>
                                            </div>   
                                            <div className="message-meta">
                                                <p id="time">{messageContent.time}</p>
                                            </div> 
                                        </div>    
                                    </div>
                                );
                            })}
                        </ScrollToBottom>
                    </div>
                    <div className="chat-type-outer">
                        <div className="chat-type">
                            <div className="chat-input">
                                <input
                                type="text"
                                value={currentMessage}
                                placeholder="Send a message"
                                onChange={(e) => {setCurrentMessage(e.target.value)}}
                                onKeyPress={(event) =>{event.key === "Enter" && sendmessage()}}
                                > 
                                </input>
                            </div>
                            <div className="send-icon" onClick={sendmessage}>
                                <FaPaperPlane/>
                            </div>
                        </div> 
                    </div>
                </div>
        //     </div>
        // </div>
    );
}
 
export default Chatpage;