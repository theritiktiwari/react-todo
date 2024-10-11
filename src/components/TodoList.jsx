/**
 * @file TodoList.jsx
 * @description Component to render list of todo items
 */

import React from 'react';
import { TodoItem } from './TodoItem';

/**
 * TodoList component to render list of todo items
 * @param {object} props - Props for the component
 * @param {Array} props.todo - Array of todo items
 */
export const TodoList = ( { todo } ) => {
	return (
		<>
			{ todo?.length > 0 ? (
				<ul className="todo-list">
					{ todo?.map( ( todo ) => <TodoItem key={ todo.id } todo={ todo } /> ) }
				</ul>
			) : <p className="not-found">No active todo found, please add now.</p> }
		</>
	);
};
