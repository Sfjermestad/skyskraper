import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to="#" className={sidebar ? 'invisible' : 'menu-bars'}>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <Link to="#" className={sidebar ? 'menu-bars' : 'invisible'}>
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        {/* <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link> */}
                    </li>
                    {SideBarData.map((item, index) => {
                        {if (item.title != 'Music') {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                                )
                            }
                            else {
                                return (
                                    <li key={index} className={item.cName}>
                                        <a href='https://distrokid.com/hyperfollow/skyskraper/floor-one'>
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                    )
                            }
                        }
                    })}
                </ul>
            </nav>
        </>
    )
}
export default Navbar
