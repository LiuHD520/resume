import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from '$router';
import HomePage from './home';

import yoHistory from '../../common/history';
const Home = require.async('./home');
const List = require.async('./list');
const Detail = require.async('./detail');
const About = require.async('./about');

const Root = () => (
    <Router history={yoHistory}>
        <Route path="/">
            <IndexRoute component={HomePage}/>
            <Route path="home" getComponent={Home} />
            <Route path="list" getComponent={List} />
            <Route path="detail" getComponent={Detail}/>
            <Route path="about" getComponent={About}/>
        </Route>
    </Router>
);


ReactDOM.render(<Root />, document.getElementById('root'));
