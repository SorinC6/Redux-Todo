import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { addTodo, toggleTodo, deleteTodo } from '../actions';

class TodoList extends React.Component {
	state = {
		inputValue: ''
	};

	addTodo = () => {
		this.props.addTodo(this.state.inputValue);
		this.setState({
			inputValue: ''
		});
   };
   
   deleteTodo = () => {
      this.props.deleteTodo(this.props.todos)
   }

	handleChange = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	};

	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<h1>Redux Todo</h1>
				{this.props.todos.map((todo, i) => {
					return <TodoItem key={i} todo={todo} index={i} toggleTodo={this.props.toggleTodo} />;
				})}
				<input placeholder="todos..." type="text" value={this.state.inputValue} onChange={this.handleChange} />
				<button onClick={this.addTodo}>Add Todo</button>
            <button onClick={this.deleteTodo}>Delete Todos</button>
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
