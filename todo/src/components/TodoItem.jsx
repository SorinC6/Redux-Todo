import React from 'react';

const TodoItem = (props) => {
	return (
		<React.Fragment>
			<p>{props.todo.value}</p>
		</React.Fragment>
	);
};

export default TodoItem;
