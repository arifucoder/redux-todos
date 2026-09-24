import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
	const tasks = useAppSelector(selectTasks);
	return (
		<div className="mx-auto max-w-7xl px-5 mt-20">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl">Tasks</h1>
				<Tabs defaultValue={"all"} className="w-100">
					<TabsList>
						<TabsTrigger value={"all"}>All</TabsTrigger>
						<TabsTrigger value={"low"}>Low</TabsTrigger>
						<TabsTrigger value={"medium"}>Medium</TabsTrigger>
						<TabsTrigger value={"high"}>High</TabsTrigger>
					</TabsList>
				</Tabs>
				<AddTaskModal />
			</div>

			<div className="space-y-5 mt-5">
				{tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};

export default Task;
