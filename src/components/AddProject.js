import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import uuid from 'uuid';
import PropTypes from 'prop-types'
class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['Web Design','Web Development','Mobile Developement']
    }

    handleSubmit(e){
        if(this.refs.title.value===''){
            alert('Title is required.')
        }else{
            this.setState({newProject:{
                id:uuid.v4(),
                title: this.refs.title.value,
                category:this.refs.category.value
            }}, function(){
                //console.log(this.state)
                this.props.addProject(this.state.newProject);
            })
            console.log(this.refs.title.value);
       
        }
        e.preventDefault();
    }


  render() {
   let categoryOptions = this.props.categories.map(category => {
       return <option key={category} value={category}>{category}</option>
   })
    return (
      //Return must be in single element at top level
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br />
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label><br />
                <select ref="category">
                {categoryOptions}
                </select>
            </div>
            <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}
AddProject.propTypes = {
    categories : PropTypes.array.isRequired,
    addProject : PropTypes.func.isRequired
}
export default AddProject;
