import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import './Item.scss';
import { memo, useCallback, useState } from 'react';
import Timer from '../timer/Timer';

function changeStorage(nextTodoForm, id){
	const getStorage = JSON.parse(window.localStorage.getItem('todos'));
	getStorage[getStorage.findIndex((array) => (array.id === id))] = nextTodoForm;
	window.localStorage.setItem('todos', JSON.stringify(getStorage))
}

const Item = memo(({ todo, onRemove, onToggle }) => {
	const [focus, setFocus] = useState(false);
	const [todoForm, setTodoForm] = useState({
		id: todo.id,
		text: todo.text,
		year: todo.year,
		month: todo.month,
		day: todo.day,
		hour: todo.hour,
		minute: todo.minute,
		second: todo.second,
		check: todo.check,
	});
	const { id, text, year, month, day, hour, minute, second } = todoForm;
	const [inputEdit, setInputEdit] = useState({
		text: text,
		limit: `${year}.${String(month).padStart(2, " ")}.${String(day).padStart(2, " ")},${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`,
	});

	const onChangeInput = useCallback((e) => {
		const nextInput = {
			...inputEdit,
			[e.target.name]: e.target.value
		};
		setInputEdit(nextInput);
	}, [inputEdit]);

	const onClickEdit = useCallback(() => {
		const nextTodoForm = {
			...todo,
			text: inputEdit.text,
			year: inputEdit.limit.split('.')[0],
			month: inputEdit.limit.split('.')[1],
			day: inputEdit.limit.split('.')[2].split(',')[0],
			hour: inputEdit.limit.split(':')[0].split(',')[1],
			minute: inputEdit.limit.split(':')[1],
			second: inputEdit.limit.split(':')[2],
		}
		setTodoForm(nextTodoForm);
		setFocus(false);
		changeStorage(nextTodoForm, id);
	}, [todo, inputEdit, id]);

	const onFocusIn = useCallback(() => {
		setFocus(true);
	}, []);

	return (
		<div className="Item">
			<div className={'checkbox' + (todo.check? ' check' : '')}>
				<div onClick={() => onToggle(id)}>
					{todo.check ? <MdFavorite /> : <MdFavoriteBorder />}
				</div>
				<input className="text" value={inputEdit.text} name="text" onChange={onChangeInput} onFocus={onFocusIn} autoComplete="off"></input>
				<input className="text limit" value={inputEdit.limit} name="limit" onChange={onChangeInput} onFocus={onFocusIn} autoComplete="off"></input>
				<div className="text timer"><Timer todoForm={todoForm} todo={todo}/></div>
			</div>
			<div className="edit" onClick={onClickEdit}>{focus? 'Edit' : ''}</div>
			<div className="remove" onClick={() => onRemove(id)}>
				<BsFillTrashFill />
			</div>
		</div>
	)
})

export default Item;
