import { ADD_TODO } from '../actions';

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
				todo: action.payload
			};
		default:
			return state;
	}
};

export default rootReducer;
