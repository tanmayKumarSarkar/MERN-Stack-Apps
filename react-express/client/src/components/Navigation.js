import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <span> <NavLink to="/"> Home </NavLink> </span>
            <span> <NavLink to="/about"> About </NavLink> </span>
            <span> <NavLink to="/products"> ProductManager </NavLink> </span>
            <span> <NavLink to="/genre" > Genres </NavLink> </span>
            <span> <NavLink to="/book" > Books </NavLink> </span>
        </nav>
    );
};

export default Navigation;