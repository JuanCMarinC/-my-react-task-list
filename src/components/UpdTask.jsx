import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { formControl } from '../hooks/formControl';

export const UpdTask = ({ task, handleUpdateTask }) => {
	const { updateDescription, onInputChange } = formControl({
		updateDescription: task.description,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = task.id;
		const description = updateDescription;

		handleUpdateTask(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`input-update ${
					task.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿Qué tarea deseas agregar?'
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};
