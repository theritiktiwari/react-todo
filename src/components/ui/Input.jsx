import React from 'react';

export const Input = ({ type, placeholder, value, onChange }) => {
	return (
		<input
			className="input-box"
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
