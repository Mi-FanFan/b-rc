---
order: 1
title: 异步关闭
---


````jsx
import { Modal, Button } from 'b-rc';

class Test extends React.Component{
  constructor(props){
     super(props) 
     this.showModal = this.showModal.bind(this)
     this.handleOk = this.handleOk.bind(this)
     this.handleCancel = this.handleCancel.bind(this)
     this.state = {
        ModalText: 'Content of the modal dialog',
        visible: false,
     }
  }
  
  showModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk() {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel() {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
        <Modal title="Title of the modal dialog"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{this.state.ModalText}</p>
        </Modal>
      </div>
    );
  }
};

ReactDOM.render(<Test />, mountNode);
````
