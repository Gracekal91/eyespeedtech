import './HomeComponents.scss'
import { useState } from 'react'
import eyetech_logo from '../../assets/images/eyetech_logo.png'
import Sidebar from './Sidebar'

const Navigation = () => {

    const [displaySideBar, setDisplaySideBar] = useState(false)


    const handleSideMenu = () => {
        setDisplaySideBar(!displaySideBar)
    }
    return (
        <div className='navigation'>
            <div className="overlay"></div>
            <div className="container navContent">
                <img src={eyetech_logo} alt="" className="logo img-fluid" />

                <div className="burger" onClick={handleSideMenu}>
                    <div className="line1 line"></div>
                    <div className="line2 line" ></div>
                    <div className="line3 line"></div>
                </div>


                <div className="desktopMenu">
                    <a href="#">SERVICES</a>
                    <a href="#">PROJECTS</a>
                    <a href="#">COMPANY</a>
                    <a href="#">GREIGN-TECH</a>
                    <a href="#">CONTACT</a>
                </div>

            </div>
            {/* Style follows Hierarchie */}
            {displaySideBar && <Sidebar handleSideMenu={handleSideMenu} />}
        </div>
    )
}

export default Navigation

