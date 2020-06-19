import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Input, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const minlength = (len) => (val) => (val) && (val.length >= len);
const maxlength = (len) => (val) => !(val) || (val.length <= len);


class Contactus extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);



    }
    handleSubmit(values) {
        console.log("Current State is:" + JSON.stringify(values));
        alert("Current State is:" + JSON.stringify(values));

    }






    render() {

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
            LocalForm onSubmit = {
                (values) => this.handleSubmit(values)
            } >
            <
            Row className = "form-group" >
            <
            Label htmlFor = "firstname"
            md = { 2 } > First Name < /Label> <
            Col md = {
                10
            } >
            <
            Control.text model = ".firstname"
            id = "firstname"
            name = "firstname"
            className = "form-control"
            validators = {
                {
                    required,
                    minlength: minlength(3),
                    maxlength: maxlength(15)
                }
            }
            /> <
            Errors className = "text-danger"
            model = ".firstname"
            show = "touched"
            messages = {
                { required: 'Required', minlength: " must have atleast 3 characters", maxlength: " must have less than 15 characters" }
            } > < /Errors> < /
            Col > < /
            Row > <
            Row className = "form-group" >
            <
            Label htmlFor = "lastname"
            md = { 2 } > Last Name < /Label> <
            Col md = {
                10
            } >
            <
            Control.text model = ".lastname"
            id = "lastname"
            name = "lastname"
            className = "form-control"
            validators = {
                {
                    required,
                    minlength: minlength(3),
                    maxlength: maxlength(15)
                }
            }
            /> <
            Errors className = "text-danger"
            model = ".lastname"
            show = "touched"
            messages = {
                { required: 'Required', minlength: " must have atleast 3 characters", maxlength: " must have less than 15 characters" }
            } > < /Errors> < /
            Col > < /
            Row > <
            Row className = "form-group" >
            <
            Label htmlFor = "telnum"
            md = { 2 } > Telephone number < /Label> <
            Col md = {
                10
            } >
            <
            Control.text model = ".telnum"
            id = "telnum"
            name = "telnum"
            className = "form-control"
            validators = {
                {
                    required,
                    minlength: minlength(3),
                    maxlength: maxlength(15)
                }
            }
            / > <
            Errors className = "text-danger"
            model = ".telnum"
            show = "touched"
            messages = {
                { required: 'Required', minlength: " must have atleast 3 characters", maxlength: " must have less than 15 characters" }
            } > < /Errors> < /
            Col > < /
            Row > <
            Row className = "form-group" >
            <
            Label htmlFor = "email"
            md = { 2 } > Email ID < /Label> <
            Col md = {
                10
            } >
            <
            Control.text model = ".email"
            id = "email"
            name = "email"
            className = "form-control"
            validators = {
                {
                    required,
                    minlength: minlength(3),

                }
            }
            / > <
            Errors className = "text-danger"
            model = ".email"
            show = "touched"
            messages = {
                { required: 'Required', minlength: " must have atleast 3 characters" }
            } > < /Errors> < /
            Col > < /
            Row > <
            Row className = "form-group" >
            <
            Col md = {
                { size: 5, offset: 2 }
            } >
            <
            Label check >
            <
            Control.checkbox model = ".agree"
            name = "agree"
            className = "form-control" /
            >
            <
            strong > May we contact you ? < /strong>  < /
            Label > < /
            Col > <
            Col md = {
                { size: 5 }
            } >
            <
            Control.select model = ".contactType"
            name = "contactType"
            className = "form-control" >

            <
            option > Tel no. < /option> <
            option > Email ID < /option> < /
            Control.select > <
            /Col> < /
            Row >
            <
            Row className = "form-group" >
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
            /Row> < /
            LocalForm > < /
            div > <
            /div> < /
            div >
        );
    }

}
export default Contactus;