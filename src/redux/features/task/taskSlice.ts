import type { RootState } from "@/redux/store";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

export interface ITask {
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
			id: "rte3HSCAwfZFOTnfHcKFl",
			isCompleted: true,
			title: "Quibusdam dolor ut a",
			description: "Veniam enim consequ",
			dueDate: "1978-04-21",
			priority: "Medium",
		},
	],
	filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
	return { id: nanoid(), isCompleted: false, ...taskData };
};

// evabeu kora jai evabe korle createTask fn lagbe na but oivabe korle gusano hoi.

// const taskSlice = createSlice({
// 	name: "task",
// 	initialState,
// 	reducers: {
// 		addTask: (state, action: PayloadAction<ITask>) => {
// 			const id = uuidv4();
// 			const taskData = {
// 				...action.payload,
// 				id,
// 				isCompleted: false,
// 			};
// 			state.tasks.push(taskData);
// 		},
// 	},
// });

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<DraftTask>) => {
			const taskData = createTask(action.payload);
			state.tasks.push(taskData);
		},
		toggleCompleteState: (state, action: PayloadAction<string>) => {
			console.log(action);
			state.tasks.forEach((task) => (task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task));
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		updateFilter: (state, action: PayloadAction<"all", "low", "medium", "high">) => {},
	},
});

export const selectTasks = (state: RootState) => {
	return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
	return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
