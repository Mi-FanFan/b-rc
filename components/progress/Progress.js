import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import classNames from 'classnames';
const Progress = props => {
    let progressInfo;
    let progress;
    const {
        prefixCls,
        className,
        percent,
        status,
        format,
        trailColor,
        type,
        strokeWidth,
        width,
        showInfo,
        gapDegree,
        gapPosition,
        percentLineStyle,
        ...restProps
    } = props;
    const progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : (status || 'normal');

    const textFormatter = format || (percentNumber => `${percentNumber}%`);
    if (showInfo) {
        let text;
        const iconType = (type === 'circle' || type === 'dashboard') ? '' : '-circle';
        if (progressStatus === 'exception') {
            text = format ? textFormatter(percent) : <Icon type={`cross${iconType}`} />;
        } else if (progressStatus === 'success') {
            text = format ? textFormatter(percent) : <Icon type={`check${iconType}`} />;
        } else {
            text = textFormatter(percent);
        }
        progressInfo = <span className={`${prefixCls}-text`}>{text}</span>;
    }

    if (type === 'line') {
        const percentStyle = {
            ...percentLineStyle,
            width: `${percent}%`,
            height: strokeWidth || 10,
        };
        progress = (
            <div>
                <div className={`${prefixCls}-outer`}>
                    <div className={`${prefixCls}-inner`}>
                        <div className={`${prefixCls}-bg`} style={percentStyle} />
                    </div>
                </div>
                {progressInfo}
            </div>
        );
    }
    const classString = classNames(prefixCls, {
        [`${prefixCls}-${type === 'dashboard' && 'circle' || type}`]: true,
        [`${prefixCls}-status-${progressStatus}`]: true,
        [`${prefixCls}-show-info`]: showInfo,
    }, className);
    return (
        <div {...restProps} className={classString}>
            {progress}
        </div>
    );
};

Progress.propTypes = {
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
    showInfo: PropTypes.bool,
    percent: PropTypes.number,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    trailColor: PropTypes.string,
    format: PropTypes.func,
    gapDegree: PropTypes.number,
    percentLineStyle:PropTypes.object,//设置进度条线的样式
};

Progress.defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'mff-progress',
    gapDegree: 0,

};

export default Progress;
