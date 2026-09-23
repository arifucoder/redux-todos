import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Users = () => {
	const { count } = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

	const handlerIncrement = () => {
		dispatch(increment());
	};

	const handlerDecrement = () => {
		dispatch(decrement());
	};
	return (
		<div>
			Users
			<div className="max-w-7xl mx-auto p-5">
				<h1 className="text-center text-2xl font-bold mb-4">Counter with Redux</h1>
				<div className="flex gap-3 justify-center items-center">
					<button onClick={handlerIncrement} className="btn bg-blue-500 text-white p-2 rounded-sm cursor-pointer">
						Increment
					</button>
					<div className="text-2xl">{count}</div>
					<button onClick={handlerDecrement} className="btn bg-blue-500 text-white p-2 rounded-sm cursor-pointer">
						Decrement
					</button>
				</div>
			</div>
		</div>
	);
};

export default Users;
