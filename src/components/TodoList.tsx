import React from 'react';
import TodoItem from './TodoItem';
import { useAppSelector } from '../hooks';

const TodoList = () => {
	const todos = useAppSelector((state)=>state.todos);
    
	return (
		<ul className='list-group w-75'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;