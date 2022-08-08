import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import{configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {reducer} from "./reducers";
import App from './App';
// import {store} from "./store";

const store=configureStore({reducer}, compose(applyMiddleware(thunk)));
// const store=createStore(reducer, compose(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
);