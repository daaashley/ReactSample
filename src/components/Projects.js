import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types'
class Projects extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }
    
  render() {
    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map(project => {
            return (
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
            )
        });
    }
      console.log(this.props)
    return (
      //Return must be in single element at top level
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}


Projects.propTypes = {
    projects : PropTypes.array.isRequired,
    onDelete : PropTypes.func.isRequired
}
export default Projects;
