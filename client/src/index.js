import React from 'react';
import ReactDOM from 'react-dom';
import {provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

import App from './App';

const store=createStore(reducer, compose(applyMiddleware(thunk)))
ReactDOM.render(<App />, document.getElementById('root'));