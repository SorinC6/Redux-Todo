import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
	todo: [
		{
			value: 'Walk the dog.',
			completed: false
		},
		{
			value: 'eat lunch',
			completed: false
		},
		{
			value: 'take a wack alone',
			completed: false
		}
	]
};

const rootReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todo: [ ...state.todo, { value: action.payload, completed: false } ]
			};
		case TOGGLE_TODO:
			return {
				...state,
				todo: state.todo.map(
					(item, index) => (action.payload === index ? { ...item, completed: !item.completed } : item)
				)
			};
		default:
			return state;
	}
};

export default rootReducer;
