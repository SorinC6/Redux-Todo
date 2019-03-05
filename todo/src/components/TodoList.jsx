import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoItem.css';
import { bindActionCreators } from 'redux';
import { addTodo, toggleTodo, deleteTodo } from '../actions';

const TodoList = (props) => {
	const [ inputValue, setInputValue ] = useState('');
	const [ emptyError, setEmplyError ] = useState(false);

	useEffect(() => {
		// Update the document title using the browser API
		if(props.todos !== localStorage.getItem('todosItems')){
         localStorage.removeItem('todosItems')
         localStorage.setItem('todosItems',JSON.stringify(props.todos))
      }
	});

	const addTodo = (e) => {
		e.preventDefault();
		if (inputValue.length > 0) {
			props.addTodo(inputValue);
		} else {
			setEmplyError(true);
			setTimeout(() => {
				setEmplyError(false);
			}, 2000);
		}

		setInputValue('');
	};

	const deleteTodo = (e) => {
		e.preventDefault();
		props.deleteTodo(props.todos);
	};

	//console.log(props.todos);
	return (
		<React.Fragment>
			<div className="todo-list">
				<h1 className="app-title">Redux Todo</h1>
				{props.todos.map((todo, i) => {
					return <TodoItem key={i} todo={todo} index={i} toggleTodo={props.toggleTodo} />;
				})}
				{emptyError && <h2 style={{ color: 'red' }}>Please enter a Todo</h2>}

				<form>
					<input
						placeholder="todos..."
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className="input-style"
					/>
					<button onClick={addTodo}>Add Todo</button>
					<button onClick={deleteTodo}>Delete Todos</button>
				</form>
			</div>
		</React.Fragment>
	);
};

const mapStatetoProps = (state) => {
	return {
		todos: state.todo
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			addTodo,
			toggleTodo,
			deleteTodo
		},
		dispatch
	);
}

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
