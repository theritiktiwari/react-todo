import React, { useState } from 'react';
import { Icon } from './ui/Icon';
import { TodoList } from './TodoList';

export const CompletedTodoList = ({ todo }) => {
	const [showCompleted, setShowCompleted] = useState(false);

	return (
		<>
			{todo?.length > 0 && (
				<section className="completed-todos">
					<div className="head">
						<h4 className="title">Completed ({todo?.length})</h4>
						<Icon
							className="secondary arrow"
							onClick={() => setShowCompleted(!showCompleted)}
						/>
					</div>

					{showCompleted && <TodoList todo={todo} />}
				</section>
			)}
		</>
	);
};
