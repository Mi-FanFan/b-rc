/**
 * Created by Freeman on 2016/12/20.
 */
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute,browserHistory} from 'react-router';
import '../lib/b-rc.min.css'
import Home from './pages/Home'
import BackTopPage from './pages/BackTopPage'
import TabsPage from './pages/TabsPage'

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
        <Route path="/" component={App}>
              <IndexRoute component={Home}/>
              <Route path="backtop" component={BackTopPage}/>
              <Route path="tabs" component={TabsPage}/>
        </Route>
  </Router>
), document.getElementById('container'));