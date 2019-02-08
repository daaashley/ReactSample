import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types'
class TodosItem extends Component {

  
    
  render() {
    
    return (
      //Return must be in single element at top level
     <li className="Todo">
     <strong>{this.props.todo.title}
     </strong></li>
    );
  }
}


TodosItem.propTypes = {
    todo : PropTypes.object.isRequired,
    
}
export default TodosItem;
