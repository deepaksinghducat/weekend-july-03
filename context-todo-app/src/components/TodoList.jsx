import React from "react";
import { useContext } from "react";
import TodoContext from "../store/store";

function TodoList() {

	const store = useContext(TodoContext);

  return (
    <ul className="list-group">
		{
			store.todos.length > 0 ? store.todos.map((todo,index) =>(
				<li className="list-group-item" key={index}>{todo}
					<i className="fa fa-times" aria-hidden="true" style={{
						float: 'right'
					}} onClick={() => store.removeTodo(index)}></i>
				</li>
			)): ( <li className="list-group-item">No Todo Found</li>)
		}
    </ul>
  );
}

export default TodoList;
