import React from 'react';
import { TodoList } from './components/TodoList';
import { CompletedTodoList } from './components/CompletedTodoList';
import { CreateTodo } from './components/CreateTodo';
import { useTodo } from './context/TodoContext';

function App() {
	const { todos } = useTodo();
	const uncompletedTodos = todos?.filter((todo) => !todo.isComplete);
	const completedTodos = todos?.filter((todo) => todo.isComplete);

	return (
		<main className="container">
			<h1 className="page-title">ToDo App</h1>
			<TodoList todo={uncompletedTodos} />
			<CreateTodo />
			<CompletedTodoList todo={completedTodos} />
		</main>
	);
}

export default App;
