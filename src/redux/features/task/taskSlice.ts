import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface ITask {
	id: string;
	title: string;
	description: string;
	dueDate: string;
	isCompleted: boolean;
	priority: "High" | "Medium" | "Low";
}

interface IInitialState {
	tasks: ITask[];
	filter: "all" | "High" | "Medium" | "Low";
}

const initialState: IInitialState = {
	tasks: [
		{
			id: "dasdas",
			title: "initialize frontend",
			description: "create home page and routing",
			dueDate: "2026-11-26",
			isCompleted: false,
			priority: "High",
		},
	],
	filter: "all",
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {},
});

export const selectTasks = (state: RootState) => {
	return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
	return state.todo.filter;
};

export default taskSlice.reducer;
