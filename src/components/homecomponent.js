import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardHeader, CardText } from 'reactstrap';
import { Loading } from './loadingcomponent';

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
        if (props.dishesLoading) {
            return ( <
                div className = "container" >
                <
                div className = "row" >
                <
                Loading / >
                <
                /div> <
                /div>
            );
        } else if (props.errMess) {
            return ( <
                div className = "container" >
                <
                div className = "row" > { props.errMess } <
                /div> <
                /div>
            );
        } else {
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

    }
    export default Home;