import { NavLink } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
	return (
		<nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
			<div className="flex items-center">
				<NavLink to={"/"}>
					<span className="font-bold ml-2">TaskMaster</span>
				</NavLink>
			</div>
			<div className="flex gap-2">
				<NavLink to={"/users"}>Users</NavLink>
				<NavLink to={"/"}>Tasks</NavLink>
				<ModeToggle />
			</div>
		</nav>
	);
}
