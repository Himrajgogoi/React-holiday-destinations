import React from 'react';
import Main from './components/maincomponent';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './redux/configurstore';
import { Provider } from 'react-redux';
import './App.css';


const store = configureStore();

function App() {
    return ( <
        Provider store = { store } >

        <
        div >
        <
        BrowserRouter >
        <
        Main / >
        <
        /BrowserRouter>

        <
        /div> <
        /Provider>
    );
}

export default App;