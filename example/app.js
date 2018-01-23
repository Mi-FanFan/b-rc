/**
 * Created by Freeman on 2016/12/20.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './pages/Home'
import BackTopPage from './pages/BackTopPage'
import TabsPage from './pages/TabsPage'
import ToasterPage from './pages/ToasterPage'
import ButtonPage from './pages/ButtonPage'
import Typography from './pages/Typography'
import LoadingPage from './pages/LoadingPage'
import ModalPage from './pages/ModalPage'
import TooltipPage from './pages/TooltipPage'
import UploadPage from './pages/UploadPage'
import InputNumberPage from './pages/InputNumberPage'
import TagsInputPage from './pages/TagsInputPage'
import InputPage from './pages/InputPage'
import NouFound from './pages/NouFound'
import './component/app.less'
import App from './component/app'
import ComponentsContainer from './component/components'
import SpecContainer from './component/spec'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="spec" component={SpecContainer}>
        <Route path="font" component={Typography}/>
      </Route>
      <Route path="components" component={ComponentsContainer}>
        <Route path="backtop" component={BackTopPage}/>
        <Route path="loading" component={LoadingPage}/>
        <Route path="modal" component={ModalPage}/>
        <Route path="tabs" component={TabsPage}/>
        <Route path="toaster" component={ToasterPage}/>
        <Route path="button" component={ButtonPage}/>
        <Route path="tooltip" component={TooltipPage}/>
        <Route path="upload" component={UploadPage}/>
        <Route path="input-number" component={InputNumberPage}/>
        <Route path="tags-input" component={TagsInputPage}/>
        <Route path="input" component={InputPage}/>
      </Route>
      <Route path="*" component={NouFound}/>
    </Route>
  </Router>, document.getElementById('container'))
