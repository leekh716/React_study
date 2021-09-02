import { useCallback, useEffect, useRef, useState } from "react";
import Template from "./components/Template";
import Insert from "./components/Insert"
import List from "./components/List"
import './App.css'

const App = () => {
  const data = window.localStorage.getItem('todos');
  let newData = JSON.parse(data);
  if (!data)
  {
    newData = [
      {
        id: 1,
        text: 'Make todo',
        year: 2021,
        month: 10,
        day: 21,
        hour: 12,
        minute: 34,
        second: 56,
        check: false
    	},
			{
        id: 2,
        text: 'Delete todo',
        year: 2021,
        month: 7,
        day: 21,
        hour: 12,
        minute: 34,
        second: 56,
        check: true
    	}
    ]
  }

  const [todos, setTodos] = useState(
    newData
  );
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const refId = useRef(Date.now());

  const onClick = useCallback((text, year, month, day, hour, minute, second) => {
    const newTodo = {
      id: refId.current,
      text,
      year,
      month,
      day,
      hour,
      minute,
      second,
      check: false
    };
    setTodos(todos.concat(newTodo));
    refId.current++;
  }, [todos]);

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }, [todos]);

  const onToggle = useCallback(id => {
    setTodos(todos.map(todo =>
      id === todo.id ? {...todo, check: !todo.check} : todo
    ))
  }, [todos]);

  return (
    <div>
      <div className="app">
        <Template>
          <Insert onClick={onClick} />
          <List
            todos={todos}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        </Template>
      </div>
    </div>
  );
}

export default App;
