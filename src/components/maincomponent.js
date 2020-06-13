import React, { Component } from 'react';
import Header from './headercomponent';
import CityDetail from './citydetail';
import Cities from './citiescomponent';
import Home from './homecomponent';
import Aboutus from './aboutuscomponent';
import Contactus from './contactcomponent';
import Footer from './footercomponent';
import { CITIES } from '../shared/cities';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: CITIES,
            selectedcity: null,
            leaders: LEADERS
        };
    }
    setselectedcity(cityid) {
        this.setState({ selectedcity: cityid });
    }

    render() {
            const HomePage = () => {
                return ( <
                    Home city = { this.state.cities.filter((city) => city.featured)[0] }
                    />);
                };


                const City = ({ match }) => {
                    return ( <
                        CityDetail city = { this.state.cities.filter((city) => city.id === parseInt(match.params.cityid, 10))[0] }
                        />
                    );
                };

                const About = () => {
                    return ( <
                        Aboutus leaders = { this.state.leaders }
                        />
                    );
                };

                return ( < div > <
                    Header / >
                    <
                    Switch >
                    <
                    Route path = "/home"
                    component = { HomePage }
                    /> <
                    Route path = "/aboutus"
                    component = { About }
                    /> <
                    Route path = '/contactus'
                    component = { Contactus }
                    />    <
                    Route exact path = "/cities"
                    component = {
                        () => <
                        Cities cities = { this.state.cities }

                        />}/ >
                        <
                        Route path = "/cities/:cityid"
                        component = { City }
                        /> <
                        Redirect to = "/home" / > < /
                        Switch >
                        <
                        Footer / >
                        <
                        /div>
                    );


                }

            }

            export default Main;