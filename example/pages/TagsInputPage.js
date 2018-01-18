/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import '../../components/tags-input/style'
import '../../components/input/style'
import TagsInput from '../../components/tags-input'
export default class TagsInputDemo extends React.Component {

  constructor (props){
    super(props)
    this.handleTagsChange = this.handleTagsChange.bind(this)
    this.state = {
      tags: ['Unremovable', 'Tag 2', 'Tag 3'],
    };
  }

  handleTagsChange(tags){
    this.setState({tags})
  }


  render() {
    return (
        <div className="toaster">
          <TagsInput handleTagsChange={this.handleTagsChange} tags={this.state.tags}  />
        </div>
    );
  }
};
