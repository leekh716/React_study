import React from 'react';
import {
	MdCheckBoxOutlineBlank,
	MdRemoveCircleOutline,
	MdCheckBox
} from 'react-icons/md'
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, onEdit }) => {
	const { id, text, checked } = todo;
	return (
		<div className="TodoListItem">
			<div className={cn('checkbox', { checked })} onClick={(e) => onToggle(id)}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<input className="text" onClick={e => {e.stopPropagation(); onEdit(id)}} value={text} />
			</div>
			<div className="remove" onClick={() => onRemove(id)}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	)
}

export default TodoListItem;
