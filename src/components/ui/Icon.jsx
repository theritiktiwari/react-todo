import React from 'react';

export const Icon = ({ onClick, children, className = '' }) => {
	return (
		<button onClick={onClick} className={`icon ${className}`}>
			{children}
		</button>
	);
};
