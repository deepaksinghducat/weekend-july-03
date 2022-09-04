import React, { Component } from "react";
import { connect } from "react-redux";

class TodoListClass extends Component {
  
  render() {
    return (
      <ul className="list-group">
        {this.props.todos.length > 0 ? (
          this.props.todos.map((todo, index) => (
            <li className="list-group-item" key={index}>
              {todo}
              <i
                className="fa fa-times"
                aria-hidden="true"
                style={{
                  float: "right",
                }}
                onClick={() =>
                  this.props.deleteTodo(index)
                }
              ></i>
            </li>
          ))
        ) : (
          <li className="list-group-item">No Todo Found</li>
        )}
      </ul>
    );
  }
}

const setMapToState = state => {
	return {
		todos: state.todos
	}
}

const setMapToDispatch = dispatch => {
	return {
		deleteTodo: (index) => dispatch({ type: "delete-todo", payload: index })
	}
}

export default connect(setMapToState,setMapToDispatch)(TodoListClass);
