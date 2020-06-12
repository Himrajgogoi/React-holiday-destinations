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
        const HomePage = () => <
            Home city = { this.state.cities.filter((city) => city.featured)[0] }
        />
        return ( < div > <
            Header / >
            <
            Switch >
            <
            Route path = "/home"
            component = { HomePage }
            /> <
            Route exact path = "/cities"
            component = {
                () => <
                Cities cities = { this.state.cities }
                onClick = {
                    (cityid) => this.setselectedcity(cityid)
                }
                />}/ >
                <
                Redirect to = "/home" / > < /
                Switch >
                <
                /div>
            );


        }

    }

    export default Main;