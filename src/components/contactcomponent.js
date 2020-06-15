import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

    }
    handleSubmit(event) {
        console.log("Current State is:" + JSON.stringify(this.state));
        alert("Current State is:" + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleBlur = (field) => (evt) => {
        this.setState({ touched: {...this.state.touched, [field]: true } });
    }
    Validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''


        };

        if (this.state.firstname && firstname.length < 3)
            errors.firstname = "First name should have atleast 3 characters";
        else if (this.state.firstname && firstname.length > 10)
            errors.firstname = "First name should have atmost 10 characters";
        if (this.state.lastname && lastname.length < 3)
            errors.lastname = "Last name should have atleast 3 characters";
        else if (this.state.lastname && lastname.length > 10)
            errors.lastname = "Last name should have atmost 10 characters";
        const reg = /^\d+$/;
        if (this.state.telnum && !reg.test(telnum))
            errors.telnum = "Telephone number should have only numbers";
        if (this.state.email && email.split('').filter(x => x === '@').length != 1)
            errors.email = "Write a valid email";

        return errors;
    }
    render() {
        const errors = this.Validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Breadcrumb >
            <
            BreadcrumbItem >
            <
            Link to = '/home' > Home < /Link> < /
            BreadcrumbItem >
            <
            BreadcrumbItem >
            <
            Link to = "/aboutus" > About us < /Link></BreadcrumbItem >
            <
            BreadcrumbItem >
            <
            Link to = "/cities" > Packages < /Link></BreadcrumbItem >
            <
            BreadcrumbItem active > Contact us <
            /BreadcrumbItem> < /
            Breadcrumb > <
            /div> <
            div className = "row" >
            <
            div class = "col-6 col-sm-6" >

            <
            h3 > Contact us < /h3> </
            div > <
            div className = "col-6 col-sm-5 offset-sm-1" >
            <
            h4 > Our Address: < /h4> < /
            div > < /
            div > <
            div className = "row row-content" >
            <
            div className = "col-12 col-sm-7" >
            <
            p > Our contact info has been mentioned below.You can call us or reach us through fax and email as well. < /p> <
            i className = "fa fa-phone fa-lg" > < /i> +91 ********90<br/ >
            <
            i className = "fa fa-fax fa-lg" > < /i><a href="#"> fax@</a > < br / >
            <
            i className = "fa fa-envelope fa-lg" > < /i><a href="#"> holiday@net</a > < br / >
            <
            div className = "btn-group-justified"
            role = "group" >
            <
            a role = "button"
            class = "btn btn-primary"
            href = "+91 ********90" > < i class = "fa fa-phone fa-lg" > < /i> Call</a >
            <
            a role = "button"
            class = "btn btn-success"
            href = "#" > < i class = "fa fa-fax fa-lg" > < /i> Fax</a >
            <
            a role = "button"
            class = "btn btn-danger"
            href = "#" > < i class = "fa fa-envelope fa-lg" > < /i> Mail</a >
            <
            /div>


            <
            /div> < /
            div > <
            div class = "row row-content" >
            <
            div className = "col-12 col-md-10" >
            <
            h3 > Sign up! < /h3> <
            Form onSubmit = { this.handleSubmit } >
            <
            FormGroup row >
            <
            Label htmlFor = "firstname"
            md = { 2 } > First Name < /Label> <
            Col md = {
                10
            } >
            <
            Input type = "text"
            id = "firstname"
            name = "firstname"
            value = { this.state.firstname }
            valid = { errors.firstname === '' }
            invalid = { errors.firstname !== '' }
            placeholder = "firstname"
            onChange = { this.handleInputChange }
            onBlur = { this.handleBlur('firstname') }
            / ><FormFeedback>{errors.firstname}</FormFeedback > < /
            Col > < /
            FormGroup > <
            FormGroup row >
            <
            Label htmlFor = "lastname"
            md = { 2 } > Last Name < /Label> <
            Col md = {
                10
            } >
            <
            Input type = "text"
            id = "lastname"
            name = "lastname"
            value = { this.state.lastname }
            valid = { errors.lastname === '' }
            invalid = { errors.lastname !== '' }
            placeholder = "lastname"
            onChange = { this.handleInputChange }
            onBlur = { this.handleBlur('lastname') }
            / ><FormFeedback>{errors.lastname}</FormFeedback > < /
            Col > < /
            FormGroup > <
            FormGroup row >
            <
            Label htmlFor = "telnum"
            md = { 2 } > Telephone number < /Label> <
            Col md = {
                10
            } >
            <
            Input type = "tel"
            id = "telnum"
            name = "telnum"
            value = { this.state.telnum }
            valid = { errors.telnum === '' }
            invalid = { errors.telnum !== '' }
            placeholder = "telephone number"
            onChange = { this.handleInputChange }
            onBlur = { this.handleBlur('telnum') }
            / ><FormFeedback>{errors.telnum}</FormFeedback > < /
            Col > < /
            FormGroup > <
            FormGroup row >
            <
            Label htmlFor = "email"
            md = { 2 } > Email ID < /Label> <
            Col md = {
                10
            } >
            <
            Input type = "email"
            id = "email"
            name = "email"
            value = { this.state.email }
            valid = { errors.email === '' }
            invalid = { errors.email !== '' }
            placeholder = "emailID"
            onChange = { this.handleInputChange }
            onBlur = { this.handleBlur('email') }
            / > <FormFeedback>{errors.email}</FormFeedback > < /
            Col > < /
            FormGroup > <
            FormGroup row >
            <
            Col md = {
                { size: 5, offset: 2 }
            } >
            <
            Label check >
            <
            Input type = "checkbox"
            name = "agree"
            checked = { this.state.agree }
            onChange = { this.handleInputChange }
            /> <
            strong > May we contact you ? < /strong>  < /
            Label > < /
            Col > <
            Col md = {
                { size: 5 }
            } >
            <
            Input type = "select"
            name = "contactType"
            value = { this.state.contactType }
            onChange = { this.handleInputChange } >
            <
            option > Tel no. < /option> <
            option > Email ID < /option> < /
            Input > <
            /Col> < /
            FormGroup >
            <
            FormGroup row >
            <
            Col md = {
                { size: 4, offset: 2 }
            } >
            <
            Button type = "submit"
            color = "primary" >
            Sign up <
            /Button> < /
            Col > <
            /FormGroup> < /
            Form > < /
            div > <
            /div> < /
            div >
        );
    }

}
export default Contactus;