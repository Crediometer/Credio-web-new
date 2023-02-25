import {BiHomeAlt} from 'react-icons/bi';
import {FaWallet, FaUser} from 'react-icons/fa';
import {BsChatFill} from "react-icons/bs";
import {IoHome} from 'react-icons/io5'

export const SidebarDetails = [
    {
        title:"Dashboard",
        icon:<IoHome/>,
        link:"/dashboard"
    },
    {
        title:"Payments",
        icon:<FaWallet/>,
        link:"/payment"
    },
    {
        title:"Dialogues",
        icon:<BsChatFill/>,
        link:"/dialogue"
    },
    {
        title:"Profile",
        icon:<FaUser/>,
        link:"/profile"
    },
]