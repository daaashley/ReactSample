import React, { Component } from 'react';
import PropTypes from 'prop-types'
class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id)
        console.log('test')
    }
  render() {
      console.log(this.props)
    return (
      //Return must be in single element at top level
      <li className="Project">
         <strong>{this.props.project.title} </strong> : {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>Delete</a>
      </li>
    );
  }
}
ProjectItem.propTypes = {
    project : PropTypes.object.isRequired,
    onDelete : PropTypes.func.isRequired
}
export default ProjectItem;
