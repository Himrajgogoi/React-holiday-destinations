import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return ( <
            >
            <
            Navbar dark expand = "md"
            color = "primary" >
            <
            div className = "container" >
            <
            NavbarBrand >
            <
            h4 > Holiday Destinations < /h4> < /
            NavbarBrand > <
            /div> < /
            Navbar > <
            Jumbotron >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-12 col-sm-5" >
            <
            h1 > Holiday Destinations < /h1> < /
            div > <
            /div> < /
            div > <
            /Jumbotron>            < /
            >
        );
    }
}
export default Header;