import React from 'react';
import { Card, CardBody, CardHeader, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({ leaders }) {
    const leader = leaders.map((leader) => {
        return ( < div >
            <
            Media tag = "li" >
            <
            Media body className = "ml-5" >
            <
            Media heading > { leader.name } < /Media> <
            p > { leader.designation } < /p> <
            p > { leader.description } < /p> < /
            Media > <
            /Media> < /
            div >
        );
    });
    return ( < div > { leader } < /div>);
    }

    function Aboutus(props) {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Breadcrumb >
            <
            BreadcrumbItem >
            <
            Link to = '/home' > Home < /Link> <
            /BreadcrumbItem> <
            BreadcrumbItem active > About us <
            /BreadcrumbItem> <
            /Breadcrumb> <
            /div> <
            div className = "row" >
            <
            div className = "col-12 col-sm-6" >
            <
            h3 > About us < /h3> < /
            div >

            <
            /div>

            <
            div className = "row row-content" >
            <
            div className = "col-12 col-sm-6" >
            <
            h3 > Facts about us < /h3> <
            p > We first started it as a simple site
            for directing people to different holiday packages site.But then we thought why not provide them themselves. < /p> < /
            div > <
            div className = "col-12 col-sm" >
            <
            Card >
            <
            CardHeader > Facts at a Glance < /CardHeader> <
            CardBody >
            <
            dl className = "row" >
            <
            dt className = "col-6" > Started < /dt> <
            dd className = "col-6" > 4 th June 2008 < /dd> <
            dt className = "col-6" > Major stake holder < /dt> <
            dd className = "col-6" > Expedia < /dd> <
            dt className = "col-6" > Annual turnover < /dt> <
            dd className = "col-6" > $2, 345, 567 < /dd> < /
            dl > <
            /CardBody> < /
            Card >
            <
            /div> <
            div className = "col-12" >
            <
            CardBody color = "light" >
            <
            blockquote className = "blockquote" >
            <
            p className = "mb-0" > < em > We travel not to escape life but
            for life not to escape us < /em></p >
            <
            footer className = "blockquote-footer" > Anonymous < /footer> < /
            blockquote >
            <
            /CardBody>  < /
            div >
            <
            /div>

            <
            div className = "row row-content" >
            <
            div className = "col-12 col-sm" >

            <
            h3 > Our Crew < /h3> <
            Media list >
            <
            RenderLeader leaders = { props.leaders }
            />< /
            Media >

            <
            /div> < /
            div > <
            /div>
        );
    }

    export default Aboutus;