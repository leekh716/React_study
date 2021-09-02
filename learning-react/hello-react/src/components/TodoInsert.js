import React, { useCallback, useState } from "react";
import './TodoInsert.scss';
import { MdAttachMoney } from 'react-icons/md'

const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState('');

	const onChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback((e) => {
		e.preventDefault();
		onInsert(value);
		setValue('');
	}, [value, onInsert]);

	return (
		<form className="TodoInsert" onSubmit={onSubmit}>
			<input value={value} onChange={onChange} placeholder="Write to-do" />
			<button type="submit"><MdAttachMoney /></button>
		</form>
	)
}

export default TodoInsert;
