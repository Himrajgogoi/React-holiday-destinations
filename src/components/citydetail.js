import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg, CardHeader } from 'reactstrap';

class CityDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderCity(city) {
        return ( <
            div >
            <
            Card >
            <
            CardImg src = { city.image }
            alt = { city.name }
            /> <
            CardBody >
            <
            CardTitle > < h4 > { city.title } < /h4></CardTitle >
            <
            CardText > { city.snippet } < /CardText> < /
            CardBody >
            <
            /Card> < /
            div >
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