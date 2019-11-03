import React, { Component } from "react";
// import "./style.css";
// import Popover from 'react-bootstrap/lib/Popover';
// import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

const Header = props => (
    <header classname = "header row">
        <div classname="col-lg-3"></div>
        <div classname="col-lg-6 text-center">
            <img alt = "pokemon banner" src = "./public/images/pokemon_banner.jpg" />
        </div>
    </header>
)

export default Header;