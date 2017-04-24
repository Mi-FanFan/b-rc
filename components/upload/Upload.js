import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { T, fileToObject, genPercentAdd, getFileItem, removeFileItem } from './utils';
import ConditionUpload from "./ConditionUpload";
export default class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fileList: props.fileList || props.defaultFileList || [],
            dragState: 'drop',
        };
    }

    onStart = (file) => {
        let targetItem;
        let nextFileList = this.state.fileList.concat();
        if (file.length > 0) {
            targetItem = file.map(f => {
                const fileObject = fileToObject(f);
                fileObject.status = 'uploading';
                return fileObject;
            });
            nextFileList = nextFileList.concat(targetItem);
        } else {
            targetItem = fileToObject(file);
            targetItem.status = 'uploading';
            nextFileList.push(targetItem);
        }
        this.onChange({
            file: targetItem,
            fileList: nextFileList,
        });
        // fix ie progress
        if (!window.FormData) {
            this.autoUpdateProgress(0, targetItem);
        }
    }

    autoUpdateProgress(_, file) {
        const getPercent = genPercentAdd();
        let curPercent = 0;
        this.clearProgressTimer();
        this.progressTimer = setInterval(() => {
            curPercent = getPercent(curPercent);
            this.onProgress({
                percent: curPercent,
            }, file);
        }, 200);
    }

    onSuccess = (response, file) => {
        this.clearProgressTimer();
        try {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
        } catch (e) { /* do nothing */
        }
        let fileList = this.state.fileList;
        let targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.status = 'done';
        targetItem.response = response;
        this.onChange({
            file: { ...targetItem },
            fileList,
        });
    }

    onProgress = (e, file) => {
        let fileList = this.state.fileList;
        let targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.percent = e.percent;
        this.onChange({
            event: e,
            file: { ...targetItem },
            fileList: this.state.fileList,
        });
    }

    onError = (error, response, file) => {
        this.clearProgressTimer();
        let fileList = this.state.fileList;
        let targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.error = error;
        targetItem.response = response;
        targetItem.status = 'error';
        this.onChange({
            file: { ...targetItem },
            fileList,
        });
    }

    handleRemove(file) {
        const { onRemove } = this.props;
        // Prevent removing file
        const onRemoveReturnValue = onRemove && onRemove(file);
        if (onRemoveReturnValue === false) {
            return;
        }
        const removedFileList = removeFileItem(file, this.state.fileList);
        if (removedFileList) {
            this.onChange({
                file,
                fileList: removedFileList,
            });
        }
    }

    handleManualRemove = (file) => {
        this.upload.abort(file);
        file.status = 'removed'; // eslint-disable-line
        this.handleRemove(file);
    }

    onChange = (info) => {
        if (!('fileList' in this.props)) {
            this.setState({ fileList: info.fileList });
        }

        const { onChange } = this.props;
        if (onChange) {
            onChange(info);
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('fileList' in nextProps) {
            this.setState({
                fileList: nextProps.fileList || [],
            });
        }
    }

    onFileDrop = (e) => {
        this.setState({
            dragState: e.type,
        });
    }

    clearProgressTimer() {
        clearInterval(this.progressTimer);
    }

    render() {
        const {
            prefixCls,
            //showUploadList,
            listType,
            // onPreview,
            //type,
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
            <div className={uploadButtonCls} style={{ display: children ? '' : 'none' }}>
                <ConditionUpload {...conditionUploadProps} ref={condition => this.upload = condition} />
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
    action: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    headers: PropTypes.object,
    showUploadList: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
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
    prefixCls: 'mff-upload',
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

