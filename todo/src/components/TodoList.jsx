import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
	state = {};

	render() {
		console.log(this.props.todos);
		return (
			<React.Fragment>
				<h1>Redux Todo</h1>
			</React.Fragment>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		todos: state.todo
	};
};

export default connect(mapStatetoProps)(TodoList);
