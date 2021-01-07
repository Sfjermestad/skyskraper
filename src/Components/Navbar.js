import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    // function test() {
    //     console.log('test')
    // }

    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                {/* <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose onClick={showSidebar, test}/>
                </Link> */}

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        {/* <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link> */}
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
export default Navbar
