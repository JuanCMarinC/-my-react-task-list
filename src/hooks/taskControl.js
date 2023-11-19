import { useEffect, useReducer } from 'react';
import { tasksReducer } from '../tasksReducer';

export const taskControl = () => {
	const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('tasks')) || []
    }

	const [tasks, dispatch] = useReducer(
		tasksReducer,
		initialState,
		init
	);

    const tasksCount = tasks.length
    const pendingTasksCount = tasks.filter(task => !task.done).length


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


	const handleNewTask = task => {
		const action = {
			type: 'Add Task',
			payload: task,
		};

		dispatch(action);
	};

	const handleDeleteTask = id => {
		const action = {
			type: 'Delete Task',
			payload: id,
		};

		dispatch(action);
	};

	const handleCompleteTask = id => {
		const action = {
			type: 'Complete Task',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdateTask = (id, description) => {
		const action = {
			type: 'Update Task',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};
    const handleDeleteAllTasks = id => {
		const action = {
			type: 'Delete All'
		};

		dispatch(action);
	};

    return{
        tasks,
        tasksCount,
        pendingTasksCount,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask,
        handleDeleteAllTasks
    }
};
