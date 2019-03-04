import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	state = {};

	render() {
		console.log(this.props.todos);
		return (
			<React.Fragment>
				<h1>Redux Todo</h1>
				{this.props.todos.map((todo, i) => {
					return <TodoItem key={i} todo={todo} />;
				})}
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
