export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (todo) => {
	//console.log('action addTodo: ', todo);
	return {
		type: ADD_TODO,
		payload: todo
	};
};

export const toggleTodo = (index) => {
	//console.log('Action Toggle: ', index);
	return {
		type: TOGGLE_TODO,
		payload: index
	};
};

export const deleteTodo = (todo) => {
	console.log('Action delete: ', todo);
	return {
		type: DELETE_TODO,
		payload: todo
	};
};
