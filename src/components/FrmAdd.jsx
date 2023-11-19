import React from 'react'
import{formControl} from'../hooks/formControl'
export const FrmAdd = ({handleNewTask}) => {
    
	const { description, onInputChange, onResetForm } = formControl({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTask = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTask(newTask);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Qué tarea deseas agregar?'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
}

export default FrmAdd