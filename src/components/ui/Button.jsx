/**
 * @file Button.jsx
 * @description Component to render button element
 */

import React from 'react';

/**
 * Button component to render button element
 * @param {object} props - Props for the component
 * @param {Function} props.onClick - Function to handle click event
 * @param {string} props.children - Children of the component
 * @param {string} [props.className] - Class name for the component
 */
export const Button = ( { onClick, children, className = '' } ) => {
	return (
		<button className={ `btn ${ className }` } onClick={ onClick }>
			{ children }
		</button>
	);
};
