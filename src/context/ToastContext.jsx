import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast } from '../components/ui/Toast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
	const [toasts, setToasts] = useState([]);

	const addToast = useCallback(
		(message, type = 'secondary', duration = '3000') => {
			const id = Date.now();
			setToasts((prevToasts) => [...prevToasts, { id, type, message }]);

			setTimeout(() => {
				setToasts((prevToasts) =>
					prevToasts.filter((toast) => toast.id !== id)
				);
			}, duration);
		},
		[]
	);

	const removeToast = (id) => {
		setToasts((prevToasts) =>
			prevToasts.filter((toast) => toast.id !== id)
		);
	};

	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<Toast toasts={toasts} />
		</ToastContext.Provider>
	);
};

export const useToast = () => useContext(ToastContext);
