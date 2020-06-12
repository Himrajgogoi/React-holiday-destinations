import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, Collapse, NavItem, NavbarToggler, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            Navopen: false
        }
    }
    toggleNav() {
        this.setState({ NavOpen: !this.state.NavOpen });
    }
    render() {
        return ( <
            >
            <
            Navbar dark expand = "md"
            color = "primary" >
            <
            div className = "container" >
            <
            NavbarToggler onClick = { this.toggleNav } >
            <
            /NavbarToggler> <
            NavbarBrand >
            <
            h4 > Holiday Destinations < /h4> < /
            NavbarBrand >
            <
            Collapse isOpen = { this.state.NavOpen }
            navbar >
            <
            Nav navbar >
            <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/home" > < span className = "fa fa-home fa-lg" > < /span> Home</NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/aboutus" > < span className = "fa fa-info fa-lg" > < /span> About us</NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/cities" > < span className = "fa fa-suitcase fa-lg" > < /span> Packages</NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/contactus" > < span className = "fa fa-address-card fa-lg" > < /span> Contact us</NavLink >
            <
            /NavItem> <
            /Nav> < /
            Collapse > <
            /
            div > < /
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
            /Jumbotron>            < / >
        );
    }
}
export default Header;