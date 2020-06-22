import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg, CardHeader, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Loading } from './loadingcomponent';


const required = (val) => val && val.length;
const minlength = (len) => (val) => (val) && (val.length >= len);
const maxlength = (len) => (val) => !(val) || (val.length <= len);
class FeedBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    toggleModal() {
        this.setState({ ModalOpen: !this.state.ModalOpen });
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addfeedback(values.name, values.description);
    }
    render() {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Modal isOpen = { this.state.ModalOpen }
            toggle = { this.toggleModal } >
            <
            ModalHeader toggle = { this.toggleModal } >
            <
            h4 > Feedback < /h4> < /
            ModalHeader > <
            ModalBody >
            <
            LocalForm onSubmit = {
                (values) => this.handleSubmit(values)
            } >
            <
            Row className = "form-group" >
            <
            Col md = { 12 } >
            <
            h6 > Name < /h6> < /
            Col > <
            /Row> <
            Row className = "form-group" >
            <
            Col md = { 12 } >
            <
            Control.text model = ".name"
            name = "name"
            className = "form-control"
            validators = {
                {
                    required,
                    minlength: minlength(3),
                    maxlength: maxlength(15)
                }
            }
            / > <
            Errors model = ".name"
            className = "text-danger"
            show = "touched"
            messages = {
                { required: "Required", minlength: " must have atleast 3 characters", maxlength: "must have atleast 15 characters" }
            } > < /Errors> < /
            Col > < /
            Row > <
            Row className = "form-group" >
            <
            Col md = { 12 } >
            <
            h6 > Description < /h6> < /
            Col > <
            /Row> <
            Row className = "form-group" >
            <
            Col md = { 12 } >
            <
            Control.textarea model = ".description"
            name = "description"
            className = "form-control" / >
            <
            /Col> < /
            Row > <
            Row className = "form-group" >
            <
            Col md = { 12 } >
            <
            Button type = "submit"
            color = "primary" >
            Submit < /Button>                                      < /
            Col > <
            /Row>

            <
            /LocalForm> < /
            ModalBody > <
            /Modal> < /
            div > <
            div className = "row" >
            <
            Button outline onClick = { this.toggleModal } > < span className = "fa fa-pencil fa-lg" > Feedback < /span></Button >
            <
            /div>

            <
            /div>
        );

    }
}

class CityDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderCity(city) {
        return ( <
            Card >
            <
            CardImg src = { city.image }
            alt = { city.name }
            width = "400"
            height = "400" /
            >
            <
            CardBody >
            <
            CardTitle > < h4 > { city.name } < /h4></CardTitle >
            <
            CardText > { city.snippet } < /CardText> < /
            CardBody >
            <
            /Card>  
        );
    }
    renderDetail(comments, addfeedback) {
        const comment = comments.map((comment) => {
            return ( <
                div >
                <
                ul className = "list-unstyled" >
                <
                li className = "ml-3" > < h5 > { comment.name } < /h5> < /li > <
                li className = "ml-3" > { comment.description } < /li> < /
                ul > <
                /div>
            );
        });
        return ( <
            div >
            <
            h3 > comments < /h3> <
            div > { comment } < /div> <
            FeedBack addfeedback = { addfeedback }
            / > < /
            div >
        );
    }
    render() {
        if (this.props.isLoading) {

            return ( <
                div className = "container" >
                <
                div className = "row" >
                <
                Loading / >
                <
                /div> < /
                div >
            );
        } else if (this.props.errMess) {
            return ( <
                div className = "container" >
                <
                div className = "row" > { this.props.errMess } <
                /div> < /
                div >
            );
        } else {
            return ( < div className = "container" >
                <
                div className = "row" >
                <
                Breadcrumb >
                <
                BreadcrumbItem >
                <
                Link to = '/cities' > Packages < /Link> < /
                BreadcrumbItem > <
                BreadcrumbItem active > City <
                /BreadcrumbItem> < /
                Breadcrumb > <
                /div> <
                div className = "row" >
                <
                div className = "col-12 col-md-5 m-1" > { this.renderCity(this.props.city) } <
                /div> <
                div className = "col-12 col-md-5 m-1" > { this.renderDetail(this.props.comments, this.props.AddFeedback) } <
                /div>< /
                div > <
                /div>);
            }


        }
    }
    export default CityDetail;