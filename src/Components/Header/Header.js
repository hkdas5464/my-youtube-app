import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../../asset/logo/youtubelogo.png';



function Header({ onSubmit }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [inputSearch, setinputSearch] = useState('');
    const handleChange = (event) => setSearchTerm(event.target.value);

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchTerm);
        }
    }
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src={Logo}
                        alt="youtubelogo"
                    />
                </Link>
            </div>

            <div className="header__input">
                <input className="searchbar"
                    // onChange={e => setinputSearch(e.target.value)} 
                    // value={inputSearch} placeholder="Search" 
                    // type="text"
                    label="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyPress={onKeyPress}
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>

            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppIcon className="header__icon" />
                <NotificationIcon className="header__icon" />
                <Avatar
                    alt="photo"
                    src="https://recstudentportal.com/udaanmembers/profile/harendra.jpg"
                />
            </div>
        </div>
    )
}

export default Header;
