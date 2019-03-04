import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoItem.css';
import { addTodo, toggleTodo, deleteTodo } from '../actions';

class TodoList extends React.Component {
	state = {
		inputValue: ''
	};

	addTodo = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.inputValue);
		this.setState({
			inputValue: ''
		});
	};

	deleteTodo = (e) => {
		e.preventDefault();
		this.props.deleteTodo(this.props.todos);
	};

	handleChange = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	};

	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<div className="todo-list">
					<h1 className="app-title">Redux Todo</h1>
					{this.props.todos.map((todo, i) => {
						return <TodoItem key={i} todo={todo} index={i} toggleTodo={this.props.toggleTodo} />;
					})}
					<form>
						<input
							placeholder="todos..."
							type="text"
							value={this.state.inputValue}
							onChange={this.handleChange}
							className="input-style"
						/>
						<button onClick={this.addTodo}>Add Todo</button>
						<button onClick={this.deleteTodo}>Delete Todos</button>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		todos: state.todo
	};
};

export default connect(mapStatetoProps, { addTodo, toggleTodo, deleteTodo })(TodoList);
