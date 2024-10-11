/**
 * @file Toast.jsx
 * @description Component to render toast messages
 */

import React from 'react';

/**
 * Toast component to render toast messages
 * @param {object} props - Props for the component
 * @param {Array} props.toasts - Array of toast messages
 */
export const Toast = ( { toasts } ) => {
	return (
		<ul className="toast-container">
			{ toasts.map( ( toast ) => (
				<li key={ toast.id } className={ `toast ${ toast.type }` }>
					<span>{ toast.message }</span>
				</li>
			) ) }
		</ul>
	);
};
