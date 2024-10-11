/**
 * @file CreateTodo.jsx
 * @description Component to create new todo item
 */

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useTodo } from '../context/TodoContext';

/**
 * CreateTodo component to create new todo
 */
export const CreateTodo = () => {
	const { addTodo } = useTodo();
	const [ text, setText ] = useState( '' );

	/**
	 * Function to handle create todo
	 */
	const handleCreate = () => {
		addTodo( text );
		setText( '' );
	};

	return (
		<form onSubmit={ ( event ) => event.preventDefault() } className="create-todo">
			<Input
				type="text"
				placeholder="Add new tasks in your list"
				value={ text }
				onChange={ ( event ) => setText( event.target.value ) }
			/>
			<Button onClick={ handleCreate }>Add</Button>
		</form>
	);
};
