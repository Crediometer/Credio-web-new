import './Sidebar.css';
import { SidebarDetails } from "./SidebarDetails";
import { Link,useNavigate} from "react-router-dom";
import {IoExitOutline} from 'react-icons/io5';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { LogOutAuthAction } from '../../Redux/Login/LoginAction';
const Sidebar = (props) => {

    const { auth, logout, errorHandler,Sidebar, closeSidebar } = props;
    const history = useNavigate();

    const [activeLink, setActiveLink] = useState(null);
    function handleLinkClick(event, index) {
        event.preventDefault();
        setActiveLink(index);
    }

    const handleLogout = async (e)=>{
        e.preventDefault();
        
        try{
        await logout(()=>{ 
            console.log("now go to login..");
            history(`/`);
        });
        //;
        // setPending(true);
        }catch(e){
            // setPending(false);
            console.log("Something went wrong ??? ",e);
        }
    }
    return ( 
        <div className={Sidebar?"sidebar sidebar--open": "sidebar"}>
            
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
                    {/* <Link to='/'> */}
                        <p className="address-name" 
                        onClick={handleLogout}
                        >Logout</p>
                    {/* </Link> */}
                </Link>
            </section>
        </div>
    );
}
 
const mapStateToProps = (state) => {
    return {
      auth: state.authState,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      logout: (history) => {
        dispatch(LogOutAuthAction(history));
      },
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);