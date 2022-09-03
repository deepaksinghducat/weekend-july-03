import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {

	const todos = useSelector(state => state.todos);

	const dispatch = useDispatch();

	return (
		<ul className="list-group">
			{
				todos.length > 0 ? todos.map((todo, index) => (
					<li className="list-group-item" key={index}>{todo}
						<i className="fa fa-times" aria-hidden="true" style={{
							float: 'right'
						}} onClick={() => dispatch({type: 'delete-todo', payload: index})}></i>
					</li>
				)) : (<li className="list-group-item">No Todo Found</li>)
			}
		</ul>
	);
}

export default TodoList;
