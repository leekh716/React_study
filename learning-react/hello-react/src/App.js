import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

// function createBulkTodos() {
// 	const array = [];
// 	for (let i=1; i<=5500;i++){
// 		array.push({
// 			id: i,
// 			text: `To-do ${i}`,
// 			checked: false,
// 		});
// 	}
// 	return array;
// }

const App = () => {
	//const [todos, setTodos] = useState(createBulkTodos);
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: '1번째 요소',
			checked: false,
		},
		{
			id: 2,
			text: '2번째 요소',
			checked: false,
		},
		{
			id: 3,
			text: '3번째 요소',
			checked: true,
		}
	]);

	const nextId = useRef(5501);

	const onInsert = useCallback((text) => {
		const todo = {
			id: nextId.current,
			text: text,
			checked: false,
		};
		setTodos(todos => todos.concat(todo));
		nextId.current++;
	}, []);

	const onRemove = useCallback((id) => {
		setTodos(todos => todos.filter(todo => todo.id !== id));
	}, []);

	const onToggle = useCallback((id) => {
		setTodos(todos => todos.map(todo =>
			id === todo.id ? {...todo, checked: !todo.checked} : todo));
	}, []);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList
				todos={todos}
				onRemove={onRemove}
				onToggle={onToggle}
			/>
		</TodoTemplate>
	)
}

export default App;
