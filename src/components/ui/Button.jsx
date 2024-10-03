import React from 'react';

export const Button = ({ onClick, children, className = '' }) => {
	return (
		<button className={`btn ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};
