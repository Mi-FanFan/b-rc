import React, {Component}from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import DecIncControl from "./DecIncControl";
export default class InputNumber extends Component {
    constructor(props) {
        super(props)
        this.renderInput = this.renderInput.bind(this)
        this.renderLabel = this.renderLabel.bind(this)
    }

    render() {
        const {className, size,prefixCls,min,max,disabled,value, ...others} = this.props;
        const inputNumberClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-sm`]: size === 'small',
        }, className);
        return (
            <div className={inputNumberClass}>
                <DecIncControl
                    type="dec"
                    onClick={this.handleDec}
                    disabled={!this.checkDecAvailable()}
                />
                <div
                    className={`${prefixCls}-input-wrap`}
                    role="spinbutton"
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                >
                    <input
                        className="dec-inc__value"
                        type="text"
                        value={this.toFixed(value)}
                        disabled={disabled}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                        onWheel={this.handleWheel}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                </div>

                <DecIncControl
                    type="inc"
                    onClick={this.handleInc}
                    disabled={!this.checkIncAvailable()}
                />
            </div>
        )
    }
}
InputNumber.defaultProps = {
    prefixCls: 'mff-input-number',
    disabled: false,
}
InputNumber.propTypes = {
    prefixCls: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    disabled: PropTypes.bool,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    className: PropTypes.string,
}
