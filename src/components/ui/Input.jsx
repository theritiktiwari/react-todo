/**
 * @file Input.jsx
 * @description Component to render input element
 */

import React from 'react';

/**
 * Input component to render input element
 * @param {object} props - Props for the component
 * @param {string} props.type - Type of input element
 * @param {string} props.placeholder - Placeholder for input element
 * @param {string} props.value - Value of input element
 * @param {Function} props.onChange - Function to handle change event
 */
export const Input = ( { type, placeholder, value, onChange } ) => {
	return (
		<input
			className="input-box"
			type={ type }
			placeholder={ placeholder }
			value={ value }
			onChange={ onChange }
		/>
	);
};
