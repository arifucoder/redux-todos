import App from "@/App";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
	{
		// path: "/",
		// element: <App />,
		Component: App, // eta basically layout etar child page gulo basically page hobe
		children: [
			{
				// path: "tasks",
				index: true,
				Component: Task,
			},
			{
				path: "users",
				Component: Users,
			},
		],
	},
]);

export default router;
