/**
 * Created by Freeman on 2018/1/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'
import Input from '../input'
import Tooltip from '../tooltip'
import Icon from '../icon'

class TagsInput extends Component {
  constructor (props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.showInput = this.showInput.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputConfirm = this.handleInputConfirm.bind(this)
    this.state = {
      tags: props.tags,
      inputVisible: false,
      inputValue: '',
    }
  }

  handleClose (removedTag) {
    const {handleTagsChange} = this.props
    const tags = this.state.tags.filter(tag => tag !== removedTag)
    this.setState({tags},() => handleTagsChange(this.state.tags))
  }

  showInput () {
    this.setState({inputVisible: true}, () => this.input.focus())
  }

  handleInputChange (e) {
    this.setState({inputValue: e.target.value})
  }

  handleInputConfirm () {
    const {handleTagsChange} = this.props
    const state = this.state
    const inputValue = state.inputValue
    let tags = state.tags
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue]
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    },() => handleTagsChange(this.state.tags))
  }

  render () {
    const {tags, inputVisible, inputValue} = this.state
    return (
      <div>
        {tags.map(tag => {
          const isLongTag = tag.length > 20
          const tagElem = (
            <Tag key={tag} closable afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          )
          return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem
        })}
        {inputVisible &&
          <Input
            saveRef={input => this.input = input}
            type="text"
            size="small"
            style={{width: 78}}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        }
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{background: '#fff', borderStyle: 'dashed'}}
          >
            <Icon type="plus"/> 新标签
          </Tag>
        )}
      </div>
    )
  }
}

TagsInput.propTypes = {
  prefixCls: PropTypes.string,
  size: PropTypes.string,
  handleTagsChange:PropTypes.func,
  tags:PropTypes.array,
}

TagsInput.defaultProps = {
  prefixCls: 'mff-tags-input',
  tags:[]
}

export default TagsInput
