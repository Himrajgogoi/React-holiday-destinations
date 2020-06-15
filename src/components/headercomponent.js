import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, Collapse, NavItem, NavbarToggler, Jumbotron, Form, FormGroup, Modal, ModalHeader, ModalBody, Button, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            Navopen: false,
            Modalopen: false
        }
    }
    toggleNav() {
        this.setState({ NavOpen: !this.state.NavOpen });
    }
    toggleModal() {

        this.setState({ Modalopen: !this.state.Modalopen });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();

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
            /NavItem> < /
            Nav >
            <
            Nav className = "ml-auto"
            navbar >
            <
            Button outline onClick = { this.toggleModal } > < span className = "fa fa-sign-in fa-lg" > < /span> Sign in</Button >
            <
            /Nav> < /
            Collapse > <
            /
            div > < /
            Navbar > <
            Jumbotron >
            <
            div className = "container header" >
            <
            div className = "row" >
            <
            div className = "col-12 col-sm-5" >
            <
            h1 > Holiday Destinations < /h1> < /
            div > <
            /div> < /
            div > <
            /Jumbotron> <
            Modal isOpen = { this.state.Modalopen }
            toggle = { this.toggleModal } >
            <
            ModalHeader toggle = { this.toggleModal } >
            Login <
            /ModalHeader> <
            ModalBody >
            <
            Form onSubmit = { this.handleLogin } >
            <
            FormGroup >
            <
            Label htmlFor = "username" > Username < /Label> <
            Input type = "text"
            id = "username"
            name = "username"
            innerRef = {
                (input) => this.username = input
            } > < /Input> < /
            FormGroup > <
            FormGroup >
            <
            Label htmlFor = "password" > Password < /Label> <
            Input type = "password"
            id = "password"
            name = "password"
            innerRef = {
                (input) => this.password = input
            } > < /Input> < /
            FormGroup > <
            FormGroup check >
            <
            Label check >
            <
            Input type = "checkbox"
            name = "remember"
            innerRef = {
                (input) => this.remember = input
            }
            / >
            Remember me < /Label> < /
            FormGroup > <
            FormGroup >
            <
            Button type = "submit"
            color = "primary" > LogIn < /Button></FormGroup >
            <
            /Form> < /
            ModalBody > <
            /Modal>             < / >
        );
    }
}
export default Header;