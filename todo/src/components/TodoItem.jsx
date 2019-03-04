import React from 'react';

const TodoItem = (props) => {
	return (
		<React.Fragment>
			<p onClick={() => props.toggleTodo(props.index)}>{props.todo.value}</p>
		</React.Fragment>
	);
};

export default TodoItem;
