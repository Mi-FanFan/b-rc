import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
export default class DecIncControl extends Component {

    render() {

        const {prefixCls,type,disabled} = this.props;

        const controlClassName = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-dec`]: type === 'dec',
            [`${prefixCls}-inc`]: type === 'inc',
            [`${prefixCls}-disabled`]: disabled ,
        });
        return (
            <span
                className={controlClassName}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseOut={this.handleMouseOut}
            />
        );
    }
}
DecIncControl.propTypes = {
    prefixCls:PropTypes.string,
    type: PropTypes.string.isRequired,
    disabled:PropTypes.bool,
}
DecIncControl.defaultProps = {
    prefixCls:'mff-input-number-control',
    disabled:false,
}
