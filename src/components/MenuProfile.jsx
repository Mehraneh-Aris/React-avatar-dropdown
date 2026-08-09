import React, { useState } from "react";
import personImg from "../pictures/—Pngtree—a young waitress is posing_15501995.png";
import "../styles/MenuProfile.css"

const MenuProfile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="profile-menu-container">
            <div className="avatar" onClick={handleToggle}>
                <img src={personImg} alt="profile user" />
            </div>

            {isOpen && (
                <div className="menu-dropdown">
                    <div className="menu-header">
                        <strong>Person name</strong>
                        <small>persongmail@gmail.com</small>
                    </div>
                    <ul>
                        <li>My profile</li>
                        <li>setting</li>
                        <li>log out</li>
                    </ul>
                </div>
            )}

        </div>
    );

}

export default MenuProfile;