import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types'
import TodosItem from './TodosItem';
class Todos extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }
    
  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todo=> {
            return (
                <TodosItem key={todo.title} todo={todo} />
            )
        });
    }
      console.log(this.props)
    return (
      //Return must be in single element at top level
      <div className="Todos">
      <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}


Todos.propTypes = {
    todos : PropTypes.array.isRequired,
}
export default Todos;
