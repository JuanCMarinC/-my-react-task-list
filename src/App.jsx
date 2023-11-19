import { useState } from 'react';
import './App.css';
import { FrmAdd } from './components/FrmAdd';
import { TaskList } from './components/TaskList';
import { taskControl } from './hooks/taskControl';

function App() {
	const {
    tasks,
    tasksCount,
    pendingTasksCount,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask,
    handleDeleteAllTasks
	} = taskControl();

	return (
		<>
			<div className='card-to-do'>
				<h1>Lista de tareas</h1>
				<div className='counter-todos'>
					<h3>
						N° Tareas: <span>{tasksCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTasksCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<FrmAdd handleNewTask={handleNewTask} />
				</div>

				<TaskList
					tasks={tasks}
					handleUpdateTask={handleUpdateTask}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>

        <button className='btn-deleteall' onClick={()=>handleDeleteAllTasks()}>Borrar todas</button>
			</div>
		</>
	);
}

export default App;