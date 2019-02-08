import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import uuid from 'uuid';
import $ from 'jquery';
class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }
  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({todos:data},function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error);
      }
    })
  }
  
    getProjects(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]})
    this.getTodos()
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }
  

  componentDidMount(){
    this.getTodos();

  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id); //finds project to delete by id
    projects.splice(index,1);
    this.setState({projects:projects})
  }

  render() {
    return (
      //Return must be in single element at top level
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
