import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todo }) => {
	return (
		<>
			<ul className="todo-list">
				{todo?.length > 0 &&
					todo?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
			</ul>
		</>
	);
};
