import React, { Component } from "react";
import { connect } from "react-redux";

class InputClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      err: false,
    };
  }

  addTodo = (event) => {
    event.preventDefault();
    if (this.state.todo.length > 0) {
      this.props.addTodo(this.state.todo);
      this.setState({ todo: "" });
    } else {
      this.setState({ err: true });
    }
  };

  render() {
    return (
      <form className="row g-3 mt-4" onSubmit={this.addTodo}>
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo"
            value={this.state.todo}
            onChange={(e) => {
              this.setState({ todo: e.target.value, err: false });

              if (e.target.value.length === 0) {
                this.setState({ err: true });
              }
            }}
          />
          {this.state.err && (
            <p className="text-danger">Please Enter the Valid Todo</p>
          )}
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add Todo
          </button>
        </div>
      </form>
    );
  }
}

const setMapToDispatch = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: "add-todo", payload: todo }),
  };
};

export default connect(null, setMapToDispatch)(InputClass);
