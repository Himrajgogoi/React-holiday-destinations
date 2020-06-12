import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg, CardHeader } from 'reactstrap';

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
                Card onClick = {
                    () => this.props.onClick(city.id)
                } >
                <
                CardHeader > < h3 > { city.name } < /h3></CardHeader >
                <
                CardImg src = { city.image }
                width = "500"
                height = "500"
                alt = { city.name }
                /> < /
                Card > < /
                div >
            );
        });

        return ( <
            div className = "container" >
            <
            div className = "row" > { cities } < /
            div > <
            /div>
        );
    }
}
export default Cities;