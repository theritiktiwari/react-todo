/**
 * @file TodoContext.jsx
 * @description Context to manage todos
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from './ToastContext';

const TodoContext = createContext();

/**
 * TodoProvider component to provide todo context
 * @param {object} props - Props for the component
 * @param {object} props.children - Children of the component
 */
export const TodoProvider = ( { children } ) => {
	const { addToast } = useToast();

	// State to store the todos.
	const [ todos, setTodos ] = useState( () => {
		try {
			const savedTodos = localStorage.getItem( 'todos' );
			return savedTodos ? JSON.parse( savedTodos ) : [];
		} catch ( error ) {
			return [];
		}
	} );

	// Save todos to local storage.
	useEffect( () => {
		if ( todos.length > 0 ) {
			localStorage.setItem( 'todos', JSON.stringify( todos ) );
		}
	}, [ todos ] );

	/**
	 * Function to add a todo.
	 * @param {string} text - Text for the todo
	 * @returns {void}
	 */
	const addTodo = ( text ) => {
		if ( ! text ) {
			addToast( 'Please enter task details', 'error' );
			return;
		}

		setTodos( ( prevTodos ) => [
			...prevTodos,
			{ id: Date.now(), text, isComplete: false },
		] );

		addToast( 'Task added successfully', 'success' );
	};

	/**
	 * Function to mark a todo as complete or incomplete.
	 * @param {number} id - Id of the todo
	 * @returns {void}
	 */
	const completeTodo = ( id ) => {
		setTodos( ( prevTodos ) =>
			prevTodos.map( ( todo ) =>
				todo.id === id
					? {
							...todo,
							isComplete: ! todo.isComplete,
							completedAt: todo.isComplete ? null : Date.now(),
						}
					: todo
			)
		);

		if ( todos.find( ( todo ) => todo.id === id ).isComplete ) {
			addToast( 'Task marked as incomplete', 'warning' );
		} else {
			addToast( 'Task marked as complete', 'success' );
		}
	};

	/**
	 * Function to edit a todo.
	 * @param {number} id - Id of the todo
	 * @param {string} text - Text for the todo
	 * @returns {void}
	 */
	const editTodo = ( id, text ) => {
		if ( ! text ) {
			addToast( 'Please enter task details', 'error' );
			return;
		}

		if ( todos.find( ( todo ) => todo.id === id ).text === text ) {
			addToast( 'No changes found', 'error' );
			return;
		}

		setTodos( ( prevTodos ) =>
			prevTodos.map( ( todo ) => ( todo.id === id ? { ...todo, text } : todo ) )
		);

		addToast( 'Task updated successfully', 'success' );
	};

	/**
	 * Function to delete a todo.
	 * @param {number} id - Id of the todo
	 * @returns {void}
	 */
	const deleteTodo = ( id ) => {
		setTodos( ( prevTodos ) => prevTodos.filter( ( todo ) => todo.id !== id ) );

		addToast( 'Task deleted successfully', 'success' );
	};

	return (
		<TodoContext.Provider
			value={ {
				todos,
				addTodo,
				completeTodo,
				editTodo,
				deleteTodo,
			} }
		>
			{ children }
		</TodoContext.Provider>
	);
};

export const useTodo = () => useContext( TodoContext );
