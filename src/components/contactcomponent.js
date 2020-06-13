import React from 'react';

function Contactus(props) {
    return ( <
        div className = "container" >
        <
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
        div >

        <
        /div> 
    );
}
export default Contactus;