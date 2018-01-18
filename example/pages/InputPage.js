/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import '../../components/input/style'
import Input from '../../components/input'
export default class InputDemo extends React.Component {

  render() {
    return (
        <div className="toaster">
          <Input placeholder="Basic usage" />
        </div>
    );
  }
};
