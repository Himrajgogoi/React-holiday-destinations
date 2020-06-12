import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardHeader, CardText } from 'reactstrap';

function RenderCard({ item }) {
    return ( < Card >
        <
        CardHeader > < h4 > { item.title } < /h4></CardHeader >
        <
        CardImg src = { item.image }
        alt = { item.name }
        width = "500"
        height = "500" / >
        <
        CardBody >
        <
        CardTitle > { item.name } < /CardTitle> <
        CardText > { item.description } < /CardText> < /
        CardBody > <
        /Card>);
    }

    function Home(props) {
        return ( <
            div classname = "container" >
            <
            div className = "row" >
            <
            div className = "col-12 col-md-4 offset-md-4" >
            <
            RenderCard item = { props.city }
            /> < /
            div >

            <
            /div> < /
            div >
        );
    }
    export default Home;