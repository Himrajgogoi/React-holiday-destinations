import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const cities = this.props.cities.map((city) => {
            return ( <
                div key = { city.id }
                className = "col-12 col-md-5 m-1" >

                <
                Link to = { `/cities/${city.id}` } >
                <
                Card >
                <
                CardHeader > < h3 > { city.name } < /h3> < /
                CardHeader > <
                CardImg src = { city.image }
                width = "500"
                height = "500"
                alt = { city.title }
                /> < /
                Card > <
                /Link> < /
                div >
            );
        });

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
            Link to = "/aboutus" > About us < /Link></BreadcrumbItem > <
            BreadcrumbItem active > Packages <
            /BreadcrumbItem> < /
            Breadcrumb > <
            /div> <
            div className = "row" > { cities } < /
            div > <
            /div>
        );
    }
}
export default Cities;