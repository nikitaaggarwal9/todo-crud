import React from 'react';
import {toast} from "react-toastify";
import {
	toggleComplete,
	deleteTodo,
} from "../redux/todoSlice";
import EditModal from "./EditModal";
import { useAppDispatch } from '../hooks';
import {IItemProps} from '../redux/store';

const TodoItem = ({id, title, completed}:IItemProps) => {
	const dispatch = useAppDispatch();

	const handleCompleteClick = () => {
		dispatch(
			toggleComplete({
				id: id,
				completed: !completed,
			})
		);
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({id: id}));
		toast.info("Todo Deleted Succesfully!");
	};

	return (
		<li
			className={`list-group-item ${
				completed &&
				"list-group-item-success"
			}`}>
			<div className="d-flex justify-content-between">
				<span className="d-flex align-items-center">
					<input
						type="checkbox"
						className="mr-3"
						checked={completed}
						onChange={
							handleCompleteClick
						}></input>
					{title}
				</span>

				<div className="d-flex justify-content-between">
					<button
						className="btn btn-danger mr-5"
						onClick={
							handleDeleteClick
						}>
						Delete
					</button>

					<EditModal
						id={id}
						title={title}
                        edit={true}
					/>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
