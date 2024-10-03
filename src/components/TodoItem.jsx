import React, { useState } from 'react';
import { Icon } from './ui/Icon';
import { Input } from './ui/Input';
import { useTodo } from '../context/TodoContext';

export const TodoItem = ({ todo }) => {
	const { completeTodo, editTodo, deleteTodo } = useTodo();
	const [isEdit, setIsEdit] = useState(false);
	const [text, setText] = useState(todo?.text);

	const handleEdit = () => {
		if (isEdit) {
			editTodo(todo?.id, text);
		}
		setIsEdit(!isEdit);
	};

	const handleDelete = () => {
		if (isEdit) {
			setIsEdit(false);
		} else {
			const isConfirmed = window.confirm(
				'Are you sure you want to delete?'
			);
			if (isConfirmed) {
				deleteTodo(todo?.id);
			}
		}
	};

	const formatTime = (time) => {
		const date = new Date(time);
		return date.toLocaleString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		});
	};

	return (
		<>
			{isEdit ? (
				<ShowForm
					text={text}
					onChange={(e) => setText(e.target.value)}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			) : (
				<li className={`todo-item ${todo?.isComplete && 'complete'}`}>
					<div className="text-box">
						<p className="text">{todo?.text}</p>
						{todo?.isComplete && (
							<time className="time">
								<span>Completed at: </span>
								{formatTime(todo?.completedAt)}
							</time>
						)}
					</div>
					<div className="actions">
						<Icon
							onClick={() => completeTodo(todo?.id)}
							className={todo?.isComplete ? 'warning' : 'success'}
						/>
						<Icon onClick={handleEdit} className="secondary" />
						<Icon onClick={handleDelete} className="destructive" />
					</div>
				</li>
			)}
		</>
	);
};

const ShowForm = ({ text, onChange, handleEdit, handleDelete }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()} className="todo-item">
			<Input
				type="text"
				placeholder="Add new tasks in your list"
				value={text}
				onChange={onChange}
			/>
			<div className="actions">
				<Icon onClick={handleEdit} className="secondary save" />
				<Icon onClick={handleDelete} className="destructive cross" />
			</div>
		</form>
	);
};
