import React, { useRef, useCallback, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: 'Pipex 언제 깨지',
			checked: false,
		},
		{
			id: 2,
			text: '42과제 해야되는데 흠',
			checked: true,
		},
		{
			id: 3,
			text: '아니야 어차피 블랙홀 주자너',
			checked: true,
		},
	]);

	const nextId = useRef(4);

	const onInsert = useCallback(
		text => {
			const todo = {
				id: nextId.current,
				text,
				checked: false,
			};
			setTodos(todos.concat(todo));
			nextId.current++;
		},
		[todos],
	);

	const onRemove = useCallback(
		id => {
			setTodos(todos.filter(todo => todo.id !== id));
		},
		[todos]
	);

	const onToggle = useCallback(
		id => {
			setTodos(
				todos.map(todo =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo
				)
			);
		},
		[todos]
	);

	const onEdit = useCallback(
		id => {

		}
	)

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} />
		</TodoTemplate>
	);
}

export default App;
