import React from 'react';
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from './hooks';
// import { RootState } from 'app/redux/store';

const App = () => {
	const todos = useAppSelector((state)=>state.todos);

	return (
		<>
			<ToastContainer />
			<NavBar />
			<div className="container bg-white p-4 mt-5 d-flex flex-column align-items-center justify-content-center">
				{todos.length > 0 ? <TodoList /> : <h2>No todos added yet!</h2>}
			</div>
		</>
	);
};

export default App;
