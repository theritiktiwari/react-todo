import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ToastProvider } from './context/ToastContext';
import { TodoProvider } from './context/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		{process.env.NODE_ENV === 'development' ? (
			<React.StrictMode>
				<ToastProvider>
					<TodoProvider>
						<App />
					</TodoProvider>
				</ToastProvider>
			</React.StrictMode>
		) : (
			<ToastProvider>
				<TodoProvider>
					<App />
				</TodoProvider>
			</ToastProvider>
		)}
	</>
);
