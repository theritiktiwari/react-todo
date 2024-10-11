/**
 * @file ToastContext.jsx
 * @description Context to show toast messages
 */

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast } from '../components/ui/Toast';

const ToastContext = createContext();

/**
 * ToastProvider component to provide toast context
 * @param {object} props - Props for the component
 * @param {object} props.children - Children of the component
 */
export const ToastProvider = ( { children } ) => {
	const [ toasts, setToasts ] = useState( [] );

	/**
	 * Function to add toast message
	 * @param {string} message - Message to show in toast
	 * @param {string} [type='secondary'] - Type of toast
	 * @param {string} [duration='3000'] - Duration of toast
	 * @returns {void}
	 */
	const addToast = useCallback(
		( message, type = 'secondary', duration = '3000' ) => {
			const id = Date.now();
			setToasts( ( prevToasts ) => [ ...prevToasts, { id, type, message } ] );

			setTimeout( () => {
				setToasts( ( prevToasts ) =>
					prevToasts.filter( ( toast ) => toast.id !== id )
				);
			}, duration );
		},
		[]
	);

	/**
	 * Function to remove toast message
	 * @param {number} id - Id of the toast to remove
	 * @returns {void}
	 */
	const removeToast = ( id ) => {
		setToasts( ( prevToasts ) =>
			prevToasts.filter( ( toast ) => toast.id !== id )
		);
	};

	return (
		<ToastContext.Provider value={ { addToast, removeToast } }>
			{ children }
			<Toast toasts={ toasts } />
		</ToastContext.Provider>
	);
};

export const useToast = () => useContext( ToastContext );
