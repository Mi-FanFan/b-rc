/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import Toaster from '../../components/toaster'
import Button from '../../components/button'
import '../../components/toaster/style'
import '../../components/button/style'

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
          <Button type="primary" onClick={()=>this.handle('default','Warn Toptip')} >Default Toptip</Button>
          <Button onClick={()=>this.handle('primary','Primary Toptip')} >Primary Toptip</Button>
          <Button onClick={()=>this.handle('info','Info Toptip')} >Info Toptip</Button>
          <Button onClick={()=>this.handle('warn','Warn Toptip')} >Warn Toptip</Button>
          <Toaster msg={this.state.msg} hideCallBack={this.handleHide}/>
        </div>
    );
  }
};