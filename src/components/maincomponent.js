import React, { Component } from 'react';
import Header from './headercomponent';
import CityDetail from './citydetail';
import Cities from './citiescomponent';
import Home from './homecomponent';
import { CITIES } from '../shared/cities';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: CITIES,
            selectedcity: null
        };
    }
    setselectedcity(cityid) {
        this.setState({ selectedcity: cityid });
    }

    render() {
        return ( <
            div >
            <
            Header / >
            <
            Switch >
            <
            Route path = "/home"
            component = { Home } >
            <
            /Route> <
            Route exact path = "/cities"
            component = {
                () => <
                Cities cities = { this.state.cities }
                onClick = {
                    (cityid) => this.setselectedcity(cityid)
                }
                />}></Route >
                <
                Redirect to = "/home" > < /Redirect> < /
                Switch > < /
                div >
            );
        }

    }

    export default Main;