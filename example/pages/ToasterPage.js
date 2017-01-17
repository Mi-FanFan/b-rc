/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import {Toaster} from '../../components'

export default class ToasterDemo extends React.Component {

  constructor(props){
    super(props)
    this.handle = this.handle.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.state = {
      msg:{
        type:'default',
        content:''
      }
    }
  }

  handle(type,content){
    this.setState({
      msg:{
        type:type,
        content:content
      }
    })
  }
  handleHide(){
    this.setState({
      msg:{
        type:'default',
        content:''
      }
    })
  }
  render() {
    return (
        <div className="toaster">
          <button onClick={()=>this.handle('default','Warn Toptip')} >Default Toptip</button>
          <button onClick={()=>this.handle('primary','Primary Toptip')} >Primary Toptip</button>
          <button onClick={()=>this.handle('info','Info Toptip')} >Info Toptip</button>
          <button onClick={()=>this.handle('warn','Warn Toptip')} >Warn Toptip</button>
          <Toaster msg={this.state.msg} hideCallBack={this.handleHide}/>
        </div>
    );
  }
};