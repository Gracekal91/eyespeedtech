import React from 'react'

const Sidebar = ({ handleSideMenu }) => {
    return (
        <div className="sideBar" onClick={handleSideMenu}>
            <div className="menu">
                Services<br />
                Company<br />
                G-TECH<br />
                <hr />
                Search<br />
                Account

            </div>
        </div>
    )
}

export default Sidebar
