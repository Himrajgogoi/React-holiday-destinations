import React, { Component } from 'react';
import Header from './headercomponent';
import CityDetail from './citydetail';
import Cities from './citiescomponent';
import { CITIES } from '../shared/cities';

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
            Cities cities = { this.state.cities }
            onClick = {
                (cityid) => this.setselectedcity(cityid)
            }
            /> <
            CityDetail city = { this.state.cities.filter((city) => city.id === this.state.selectedcity)[0] }
            / > < /
            div >
        );
    }

}

export default Main;