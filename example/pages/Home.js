import React, {Component} from 'react';
import {Link} from 'react-router'
class Home extends Component {
  render() {
    return (
      <div>
        <Link to={'backtop'} >BackTop</Link>
        <Link to={'tabs'} >Tabs</Link>
        <Link to={'viewer'} >Viewer</Link>
      </div>
    );
  }
}

export default Home;
