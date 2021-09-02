import { memo } from 'react';
import Item from './Item';
import './List.scss';

const List = memo(({ todos, onRemove, onToggle }) => {
	return (
		<div className="List">
			{todos.map(todo =>
				<Item
					key={todo.id}
					todo={todo}
					onRemove={onRemove}
					onToggle={onToggle}
				/>)}
		</div>
	)
})

export default List;
