import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {
	return (
		<React.Fragment>
			<p onClick={() => props.toggleTodo(props.index)} className={props.todo.completed ? 'line' : ''}>{props.todo.value}</p>
		</React.Fragment>
	);
};

export default TodoItem;
