import React from "react";
import personImg from "../pictures/—Pngtree—a young waitress is posing_15501995.png";
import "../styles/MenuProfile.css"

const MenuProfile = () => {
    return (
        <div className="profile-menu-container">
            <div className="avatar">
                <img src={personImg} alt="profile user" />
            </div>

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
        </div>
    );

}

export default MenuProfile;