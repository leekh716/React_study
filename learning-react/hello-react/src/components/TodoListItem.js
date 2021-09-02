import React, { memo } from 'react';
import './TodoListItem.scss';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { BsFillTrashFill } from 'react-icons/bs'
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
	const { id, text, checked } = todo;
	return (
		<div className="TodoListItem">
			<div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
				{checked ? <MdFavorite /> : <MdFavoriteBorder />}
				<div className="text">{text}</div>
			</div>
			<div className="remove" onClick={() => onRemove(id)}>
				<BsFillTrashFill />
			</div>
		</div>
	)
}

export default memo(TodoListItem);
