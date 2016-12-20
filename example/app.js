/**
 * Created by Freeman on 2016/12/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";

class App extends React.Component {
  render() {
    return (
        <div>
          Welcome
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));