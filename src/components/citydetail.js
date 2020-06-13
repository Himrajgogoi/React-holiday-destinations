import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    renderDetail(city) {
        return ( <
            div >
            <
            h3 > { city.title } < /h3> <
            p > { city.description } < /p> < /
            div >
        );
    }
    render() {
            if (this.props.city != null) {
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
                    div className = "col-12 col-md-5 m-1" > { this.renderDetail(this.props.city) } <
                    /div>< /
                    div > <
                    /div>);
                }
                else {
                    return ( < div > < /div>);
                    }

                }
            }
            export default CityDetail;