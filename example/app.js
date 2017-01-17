/**
 * Created by Freeman on 2016/12/20.
 */
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import '../components/style/index.less'
import Home from './pages/Home'
import BackTopPage from './pages/BackTopPage'
import TabsPage from './pages/TabsPage'
import ToasterPage from './pages/ToasterPage'
import ButtonPage from './pages/ButtonPage'
import 'antd/dist/antd.css';
import './component/app.less'
import App from './component/app';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="backtop" component={BackTopPage}/>
        <Route path="tabs" component={TabsPage}/>
        <Route path="toaster" component={ToasterPage}/>
        <Route path="button" component={ButtonPage}/>
      </Route>
    </Router>
), document.getElementById('container'));