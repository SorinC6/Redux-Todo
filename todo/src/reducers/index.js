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
	switch (action.type) {
		default:
			return state;
	}
};

export default rootReducer;
