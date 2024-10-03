import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useTodo } from '../context/TodoContext';

export const CreateTodo = () => {
	const { addTodo } = useTodo();
	const [text, setText] = useState('');

	const handleCreate = () => {
		addTodo(text);
		setText('');
	};

	return (
		<form onSubmit={(e) => e.preventDefault()} className="create-todo">
			<Input
				type="text"
				placeholder="Add new tasks in your list"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<Button onClick={handleCreate}>Add</Button>
		</form>
	);
};
