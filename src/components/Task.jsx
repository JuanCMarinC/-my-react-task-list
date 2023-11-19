import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { UpdTask } from './UpdTask';

export const Task = ({
	task,
	handleUpdateTask,
	handleDeleteTask,
	handleCompleteTask,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTask(task.id)}>
				<label
					className={`container-done ${task.done ? 'active' : ''}`}
				></label>
			</span>
			<UpdTask task={task} handleUpdateTask={handleUpdateTask} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTask(task.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};
