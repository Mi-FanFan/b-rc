import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uid, defaultRequest } from './utils'
export default class AjaxUploader extends Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.post = this.post.bind(this)
        this.reset = this.reset.bind(this)
        this.abort = this.abort.bind(this)
        this.state = {
            uuid: uid()
        }
        this.reqs = {};
    }

    onChange(e) {
        const files = e.target.files;
        this.uploadFiles(files)
        this.reset()
    }
    reset() {
        this.setState({
            uid: uid(),
        });
    }
    uploadFiles(files) {
        const postFiles = Array.prototype.slice.call(files)
        const len = postFiles.length;
        for (let i = 0; i < len; i++) {
            const file = postFiles[i];
            file.uid = uid()
            this.uploadFile(file, postFiles)
        }
    }

    uploadFile(file, fileList) {
        const { beforeUpload } = this.props;
        if (!beforeUpload) {
            return setTimeout(() => this.post(file), 0);
        }
        const before = beforeUpload(file, fileList)
        if (before && before.then) {
            before.then((processedFile) => {
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.post(processedFile);
                } else {
                    this.post(file);
                }
            }).catch(e => {
                console && console.log(e); // eslint-disable-line
            });
        } else if (before !== false) {
            setTimeout(() => this.post(file), 0);
        }
    }

    post(file) {
        const { onStart, onProgress, customRequest, action, name, headers, withCredentials, onSuccess, onError } = this.props;
        let { data } = this.props;
        if (typeof data === 'function') {
            data = data(file);
        }
        const { uid } = file;
        const request = customRequest || defaultRequest;
        this.reqs[uid] = request({
            action: action,
            filename: name,
            file,
            data,
            headers: headers,
            withCredentials: withCredentials,
            onProgress: onProgress ? e => {
                onProgress(e, file);
            } : null,
            onSuccess: ret => {
                delete this.reqs[uid];
                onSuccess(ret, file);
            },
            onError: (err, ret) => {
                delete this.reqs[uid];
                onError(err, ret, file);
            },
        });
        onStart(file);
    }

    onClick() {
        const el = this.file;
        if (!el) {
            return;
        }
        el.click();
    }

    onKeyDown(e) {
        if (e.key === 'Enter') {
            this.onClick();
        }
    }
    abort(file) {
        const { reqs } = this;
        if (file) {
            let uid = file;
            if (file && file.uid) {
                uid = file.uid;
            }
            if (reqs[uid]) {
                reqs[uid].abort();
                delete reqs[uid];
            }
        } else {
            Object.keys(reqs).forEach((uid) => {
                if (reqs[uid]) {
                    reqs[uid].abort();
                }

                delete reqs[uid];
            });
        }
    }
    componentWillUnmount() {
        this.abort();
    }

    render() {
        const {
            component: Tag,
            prefixCls,
            className,
            disabled,
            style,
            multiple,
            accept,
            children,
        } = this.props;
        const cls = classNames({
            [prefixCls]: true,
            [`${prefixCls}-disabled`]: disabled,
            [className]: className,
        });
        const events = disabled ? {} : {
            onClick: this.onClick,
            onKeyDown: this.onKeyDown,
            onDrop: this.onFileDrop,
            onDragOver: this.onFileDrop,
            tabIndex: '0',
        };
        return (
            <Tag
                {...events}
                className={cls}
                role="button"
                style={style}
            >
                <input
                    style={{ display: 'none' }}
                    type="file"
                    ref={file => this.file = file}
                    key={this.state.uuid}
                    accept={accept}
                    multiple={multiple}
                    onChange={this.onChange}
                />
                {children}
            </Tag>
        )
    }
}
AjaxUploader.propTypes = {
    component: PropTypes.string,
    style: PropTypes.object,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    accept: PropTypes.string,
    children: PropTypes.any,
    onStart: PropTypes.func,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),
    headers: PropTypes.object,
    beforeUpload: PropTypes.func,
    customRequest: PropTypes.func,
    onProgress: PropTypes.func,
    withCredentials: PropTypes.bool,
}