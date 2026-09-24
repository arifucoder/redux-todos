import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
	const tasks = useAppSelector(selectTasks);
	const filter = useAppSelector(selectFilter);
	console.log(tasks);
	console.log(filter);
	return (
		<div className="mx-auto max-w-7xl px-5 mt-20">
			<div>
				<h1>Tasks</h1>
			</div>

			<div className="space-y-5 mt-5">
				<TaskCard />
				<TaskCard />
				<TaskCard />
			</div>
		</div>
	);
};

export default Task;
