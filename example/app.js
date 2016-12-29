/**
 * Created by Freeman on 2016/12/20.
 */
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute,browserHistory} from 'react-router';
import '../components/style/index.less'
import Home from './pages/Home'
import BackTopPage from './pages/BackTopPage'
import TabsPage from './pages/TabsPage'
import ViewerPage from './pages/ViewerPage'

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
              <Route path="viewer" component={ViewerPage}/>
        </Route>
  </Router>
), document.getElementById('container'));