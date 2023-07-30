import {configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
});

export type ITodo = {
	id: number;
	title: string;
	completed: boolean;
}

export type IProps = {
	id: number;
	title: string; 
	edit: boolean;
}

export type IItemProps = {
	id: number;
	title: string; 
	completed: boolean;
}

export type RootState = {
	todos: ITodo[];
}

export type AppDispatch = typeof store.dispatch;
