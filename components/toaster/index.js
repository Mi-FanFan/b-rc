/**
 * Created by Freeman on 2017/1/17.
 */
import React, {Component, PropTypes} from 'react'
import TopTips from './TopTips'
class Toaster extends Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this)
    this.state = {
      show: false,
      timer: null,
    };
  }

  componentWillUnmount() {
    this.state.show && clearTimeout(this.state.timer);
  }

  componentWillReceiveProps(nextProps) {
    const {msg} = nextProps
    if (msg.content !== '' && msg.type) {
      this.handleShow()
    }
  }

  handleShow() {
    const {timeout,hideCallBack} = this.props
    this.setState({show: true});
    this.state.timer = setTimeout(() => {
      this.setState({show: false});
      hideCallBack()
    }, timeout);
  }

  render() {
    const {msg} = this.props
    return (
        <TopTips show={this.state.show} type={msg.type}>{msg.content}</TopTips>
    )
  }
}

Toaster.propTypes = {
  msg: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  timeout:PropTypes.number,
  hideCallBack: PropTypes.func.isRequired
}

Toaster.defaultProps = {
  timeout:4500
}
export default Toaster
