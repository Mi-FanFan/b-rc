/**
 * Created by Freeman on 2017/5/5.
 */
import React from 'react'
import '../../components/input-number/style'
import InputNumber from '../../components/input-number'
export default class extends React.Component {

  handleOnChange= (value)=>{
    console.log(value)
  }

  render() {
    return (
        <div className="toaster">
          <InputNumber min={1} max={100} step={1} defaultValue={1} onChange={this.handleOnChange}/>
          <br/>
          <InputNumber min={1} max={10} step={1} defaultValue={1} onChange={this.handleOnChange} disabled/>
        </div>
    );
  }
};
