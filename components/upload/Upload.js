import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {T} from './utils';
import ConditionUpload from "./ConditionUpload";
export default class Upload extends Component {

    constructor(props) {
        super(props)
        this.getUploadComponent = this.getUploadComponent.bind(this)
    }


    getUploadComponent() {

    }

    render() {
        const {
            prefixCls,
            showUploadList,
            listType,
            onPreview,
            type,
            disabled,
            children,
            className,
        } = this.props;
        const conditionUploadProps = {
            ...this.props,
            onStart: this.onStart,
            onError: this.onError,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
        };

        delete conditionUploadProps.className;
        const uploadButtonCls = classNames(prefixCls, {
            [`${prefixCls}-select`]: true,
            [`${prefixCls}-select-${listType}`]: true,
            [`${prefixCls}-disabled`]: disabled,
        });
        const uploadButton = (
            <div className={uploadButtonCls} style={{display: children ? '' : 'none'}}>
                <ConditionUpload {...conditionUploadProps} ref="upload" />
            </div>
        );
        return (
            <span className={className}>
                {uploadButton}
            </span>
        )
    }
}
Upload.propTypes = {
    type: PropTypes.oneOf(['drag', 'select']),
    name: PropTypes.string,
    //defaultFileList?: Array<File>;
    //fileList?: Array<File>;
    action: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    headers: PropTypes.object,
    showUploadList: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shapeOf({
            showRemoveIcon: PropTypes.bool,
            showPreviewIcon: PropTypes.bool
        })]),
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    beforeUpload: PropTypes.func,
    onChange: PropTypes.func,
    listType: PropTypes.oneOf(['text', 'picture', 'picture-card']),
    className: PropTypes.string,
    onPreview: PropTypes.func,
    onRemove: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    supportServerRender: PropTypes.bool,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    prefixCls: PropTypes.string,
    customRequest: PropTypes.func,
    withCredentials: PropTypes.bool,
}
Upload.defaultProps = {
    prefixCls: 'ant-upload',
    type: 'select',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    beforeUpload: T,
    showUploadList: true,
    listType: 'text', // or pictrue
    className: '',
    disabled: false,
    supportServerRender: true,
}

