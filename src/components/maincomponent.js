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
import { AddFeedback, fetchCities } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStatetoProps = state => {
    return {
        cities: state.cities,
        leaders: state.leaders,
        comments: state.comments
    }
};
const mapDispatchToProps = dispatch => ({
    AddFeedback: (name, description) => dispatch(AddFeedback(name, description)),
    fetchCities: () => { dispatch(fetchCities()) },
    resetForm: () => { dispatch(actions.reset('feedback')) }
});

class Main extends Component {

    constructor(props) {
        super(props);
    }
    setselectedcity(cityid) {
        this.setState({ selectedcity: cityid });
    }

    componentDidMount() {
        this.props.fetchCities();
    }

    render() {
            const HomePage = () => {
                    return ( <
                        Home city = { this.props.cities.cities.filter((city) => city.featured)[0] }
                        dishesLoading = { this.props.cities.isLoading }
                        errMess = { this.props.cities.errMess }
                        />);
                    };


                    const City = ({ match }) => {
                        return ( <
                            CityDetail city = {
                                this.props.cities.cities.filter((city) => city.id === parseInt(match.params.cityid, 10))[0]
                            }
                            isLoading = { this.props.cities.isLoading }
                            errMess = { this.props.cities.errMess }
                            comments = { this.props.comments }
                            AddFeedback = { this.props.AddFeedback }

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
                        component = {
                            () => < Contactus feedback = { this.props.resetForm }
                            />} /
                            > <
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

                    export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));