export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo) => {
	console.log('action addTodo: ', todo);
	return {
		type: ADD_TODO,
		payload: todo
	};
};
