import React from 'react';

export const Toast = ({ toasts }) => {
	return (
		<ul className="toast-container">
			{toasts.map((toast) => (
				<li key={toast.id} className={`toast ${toast.type}`}>
					<span>{toast.message}</span>
				</li>
			))}
		</ul>
	);
};
