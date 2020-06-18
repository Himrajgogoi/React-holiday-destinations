import React, { Component } from 'react';
import Header from './headercomponent';
import CityDetail from './citydetail';
import Cities from './citiescomponent';
import Home from './homecomponent';
import Aboutus from './aboutuscomponent';
import Contactus from './contactcomponent';
import Footer from './footercomponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStatetoProps = state => {
    return {
        cities: state.cities,
        leaders: state.leaders
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
    }
    setselectedcity(cityid) {
        this.setState({ selectedcity: cityid });
    }

    render() {
            const HomePage = () => {
                return ( <
                    Home city = { this.props.cities.filter((city) => city.featured)[0] }
                    />);
                };


                const City = ({ match }) => {
                    return ( <
                        CityDetail city = { this.props.cities.filter((city) => city.id === parseInt(match.params.cityid, 10))[0] }
                        />
                    );
                };

                const About = () => {
                    return ( <
                        Aboutus leaders = { this.props.leaders }
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
                        Cities cities = { this.props.cities }

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

            export default withRouter(connect(mapStatetoProps)(Main));