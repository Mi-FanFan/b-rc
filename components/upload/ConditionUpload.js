import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AjaxUpload from './AjaxUploader';
import IframeUpload from './IframeUploader';

class ConfitionUpload extends Component {
    constructor(props) {
        super(props)
        this.getComponent = this.getComponent.bind(this)
        this.state = {
            Component: null,
        }
    }

    componentDidMount() {
        const { supportServerRender, onReady } = this.props;
        if (supportServerRender) {
            /* eslint react/no-did-mount-set-state:0 */
            this.setState({
                Component: this.getComponent(),
            }, onReady);
        }
    }


    getComponent() {
        return typeof FormData !== 'undefined' ? AjaxUpload : IframeUpload;
    }

    abort(file) {
        this.inner.abort(file);
    }

    render() {
        const { supportServerRender } = this.props;
        if (supportServerRender) {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} ref={compo => this.inner = compo} />;
            }
            return null;
        }
        const Component = this.getComponent();
        return <Component {...this.props} ref={compo => this.inner = compo} />;
    }
}
ConfitionUpload.propTypes = {
    component: PropTypes.string,
    style: PropTypes.object,
    prefixCls: PropTypes.string,
    action: PropTypes.string,
    name: PropTypes.string,
    multipart: PropTypes.bool,
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
    onProgress: PropTypes.func,
    onStart: PropTypes.func,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),
    headers: PropTypes.object,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    beforeUpload: PropTypes.func,
    customRequest: PropTypes.func,
    onReady: PropTypes.func,
    withCredentials: PropTypes.bool,
    supportServerRender: PropTypes.bool,
}
function empty() {
}
ConfitionUpload.defaultProps = {
    component: 'span',
    prefixCls: 'mff-upload',
    data: {},
    headers: {},
    name: 'file',
    multipart: false,
    onReady: empty,
    onStart: empty,
    onError: empty,
    onSuccess: empty,
    supportServerRender: false,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false,
}
export default ConfitionUpload