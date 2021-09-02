import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle, onEdit }) => {
	return (
		<div className="TodoList">
			{todos.map(todo => (
				<TodoListItem
					todo={todo}
					key={todo.id}
					onRemove={onRemove}
					onToggle={onToggle}
					onEdit={onEdit}
				/>
			))}
		</div>
	)
}

export default TodoList;
