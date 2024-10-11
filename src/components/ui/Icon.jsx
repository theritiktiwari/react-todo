/**
 * @file Icon.jsx
 * @description Component to render icon button
 */

import React from 'react';

/**
 * Icon component to render icon button
 * @param {object} props - Props for the component
 * @param {Function} props.onClick - Function to handle click event
 * @param {string} props.children - Children of the component
 * @param {string} [props.className] - Class name for the component
 */
export const Icon = ( { onClick, children, className = '' } ) => {
	return (
		<button onClick={ onClick } className={ `icon ${ className }` } >
			{ children }
		</button>
	);
};
