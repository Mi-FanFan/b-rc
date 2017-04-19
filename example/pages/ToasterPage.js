/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import Toaster from '../../components/toaster'
import Button from '../../components/button'
import message from '../../components/message'
import '../../components/toaster/style'
import '../../components/button/style'
import '../../components/message/style'

export default class ToasterDemo extends React.Component {

  constructor(props){
    super(props)
    this.handle = this.handle.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.info = this.info.bind(this)
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

  info(){
    message.info('This is a normal message');
    message.success('This is a normal message');
    message.warning('This is a normal message');
    message.error('This is a normal message');
    message.loading('This is a normal message');
  }
  render() {
    return (
        <div className="toaster">
          <Button type="primary" onClick={()=>this.handle('default','Warn Toptip')} >Default Toptip</Button>
          <Button onClick={()=>this.handle('primary','Primary Toptip')} >Primary Toptip</Button>
          <Button onClick={()=>this.handle('info','Info Toptip')} >Info Toptip</Button>
          <Button onClick={()=>this.handle('warn','Warn Toptip')} >Warn Toptip</Button>
          <Button onClick={this.info} >Display normal message</Button>
          <Toaster msg={this.state.msg} hideCallBack={this.handleHide}/>
        </div>
    );
  }
};