/**
 * @file TodoItem.jsx
 * @description Component to render todo item
 */

import React, { useState } from 'react';
import { Icon } from './ui/Icon';
import { Input } from './ui/Input';
import { useTodo } from '../context/TodoContext';

/**
 * TodoItem component to render todo item
 * @param {object} props - Props for the component
 * @param {object} props.todo - Todo item
 */
export const TodoItem = ( { todo } ) => {
	const { completeTodo, editTodo, deleteTodo } = useTodo();
	const [ isEdit, setIsEdit ] = useState( false );
	const [ text, setText ] = useState( todo?.text );

	/**
	 * Function to handle edit todo
	 */
	const handleEdit = () => {
		if ( isEdit ) {
			editTodo( todo?.id, text );
		}
		setIsEdit( ! isEdit );
	};

	/**
	 * Function to handle delete todo
	 */
	const handleDelete = () => {
		if ( isEdit ) {
			setIsEdit( false );
		} else {
			const isConfirmed = window.confirm(
				'Are you sure you want to delete?'
			);
			if ( isConfirmed ) {
				deleteTodo( todo?.id );
			}
		}
	};

	/**
	 * Function to format time
	 * @param {number} time - Time in milliseconds
	 * @returns {string} - Formatted time
	 * @example
	 * formatTime( 1631533200000 );
	 * Returns "Sep 13, 2021, 12:00:00 AM"
	 */
	const formatTime = ( time ) => {
		const date = new Date( time );
		return date.toLocaleString( 'en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		} );
	};

	return (
		<>
			{ isEdit ? (
				<ShowForm
					text={ text }
					onChange={ ( event ) => setText( event.target.value ) }
					handleEdit={ handleEdit }
					handleDelete={ handleDelete }
				/>
			) : (
				<li className={ `todo-item ${ todo?.isComplete && 'complete' }` }>
					<div className="text-box">
						<p className="text">{ todo?.text }</p>
						{ todo?.isComplete && (
							<time className="time">
								<span>Completed at: </span>
								{ formatTime( todo?.completedAt ) }
							</time>
						) }
					</div>
					<div className="actions">
						<Icon
							onClick={ () => completeTodo( todo?.id ) }
							className={ todo?.isComplete ? 'warning' : 'success' }
						/>
						<Icon onClick={ handleEdit } className="secondary" />
						<Icon onClick={ handleDelete } className="destructive" />
					</div>
				</li>
			) }
		</>
	);
};

/**
 * ShowForm component to render form for todo item
 * @param {object} props - Props for the component
 * @param {string} props.text - Text for todo item
 * @param {Function} props.onChange - Function to handle change event
 * @param {Function} props.handleEdit - Function to handle edit event
 * @param {Function} props.handleDelete - Function to handle delete event
 */
const ShowForm = ( { text, onChange, handleEdit, handleDelete } ) => {
	return (
		<form onSubmit={ ( event ) => event.preventDefault() } className="todo-item">
			<Input
				type="text"
				placeholder="Add new tasks in your list"
				value={ text }
				onChange={ onChange }
			/>
			<div className="actions">
				<Icon onClick={ handleEdit } className="secondary save" />
				<Icon onClick={ handleDelete } className="destructive cross" />
			</div>
		</form>
	);
};
