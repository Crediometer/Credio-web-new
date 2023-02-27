import './Sidebar.css';
import { SidebarDetails } from "./SidebarDetails";
import { Link } from "react-router-dom";
import {IoExitOutline} from 'react-icons/io5';
import { useState } from 'react';
const Sidebar = ({Sidebar, closeSidebar}) => {
    const [activeLink, setActiveLink] = useState(null);
    function handleLinkClick(event, index) {
        event.preventDefault();
        setActiveLink(index);
    }
    return ( 
        <div className={Sidebar?"sidebar sidebar--open": "sidebar"}>
            <section className="sidebar-top">
                {/* <img className='image' src="https://source.unsplash.com/random/?People/"></img>
                <p className="greeting">Dear Ibrach</p> */}
            </section>
            <section className="links">
                <nav>
                    {SidebarDetails.map((val, index)=>{
                            return(
                                <li 
                                    key={index}
                                    onClick={closeSidebar} 
                                    // id={window.location.pathname == val.link ? 'active' : ''}
                                    // onClick={()=> {
                                    // window.location.pathname = val.link
                                    // }}
                                    >
                                    <Link to={val.link}
                                        // onClick={(event) => handleLinkClick(event, index)}
                                        className={activeLink === index ? 'active' : ''}
                                    >
                                        <div className="sideicon">
                                            <div className="sideicon-inner">
                                                {val.icon}
                                            </div>
                                        </div>
                                        <p className="address-name">{val.title}</p>
                                    </Link>
                                </li>
                            )
                        })}
                </nav>
            </section>
            <section className="log-out">
                <Link>
                    <div className="sideicon">
                        <div className="sideicon-inner sideicon-logout">
                            <IoExitOutline/>
                        </div>
                    </div>
                    <p className="address-name">Logout</p>
                </Link>
            </section>
        </div>
    );
}
 
export default Sidebar;