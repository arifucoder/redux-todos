import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addTask, type ITask } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { Controller, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

// type TaskFormValues = {
// 	title: string;
// 	description: string;
// 	dueDate: string;
// 	priority: "High" | "Medium" | "Low";
// };

export function AddTaskModal() {
	const form = useForm<ITask>({
		defaultValues: {
			title: "",
			description: "",
			dueDate: "",
			priority: "medium",
		},
	});

	const dispatch = useAppDispatch();
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		dispatch(addTask(data as ITask));
		form.reset();
	};

	return (
		<Dialog>
			<DialogTrigger render={<Button>Add Task</Button>} />
			<DialogContent className="sm:max-w-md">
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<DialogHeader>
						<DialogTitle>Add Task</DialogTitle>
					</DialogHeader>

					<FieldGroup className="py-4">
						<Controller
							name="title"
							control={form.control}
							rules={{ required: "Title is required" }}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="task-title">Title</FieldLabel>
									<Input
										{...field}
										id="task-title"
										aria-invalid={fieldState.invalid}
										placeholder="Initialize frontend"
										autoComplete="off"
									/>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						<Controller
							name="description"
							control={form.control}
							rules={{ maxLength: { value: 100, message: "Max 100 characters" } }}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="task-description">Description</FieldLabel>
									<InputGroup>
										<InputGroupTextarea
											{...field}
											id="task-description"
											placeholder="Create home page and routing"
											rows={4}
											className="min-h-20 resize-none"
											aria-invalid={fieldState.invalid}
										/>
										<InputGroupAddon align="block-end">
											<InputGroupText className="tabular-nums">{field.value.length}/100 characters</InputGroupText>
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						<Controller
							name="dueDate"
							control={form.control}
							rules={{ required: "Due date is required" }}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="task-dueDate">Due Date</FieldLabel>
									<Input {...field} id="task-dueDate" type="date" aria-invalid={fieldState.invalid} />
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						<Controller
							name="priority"
							control={form.control}
							render={({ field }) => (
								<Field>
									<FieldLabel htmlFor="task-priority">Priority</FieldLabel>
									<Select value={field.value} onValueChange={field.onChange}>
										<SelectTrigger id="task-priority" className="w-full">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="high">High</SelectItem>
											<SelectItem value="medium">Medium</SelectItem>
											<SelectItem value="low">Low</SelectItem>
										</SelectContent>
									</Select>
								</Field>
							)}
						/>
					</FieldGroup>

					<DialogFooter>
						<DialogClose
							render={
								<Button type="button" variant="outline">
									Cancel
								</Button>
							}
						/>
						<Button type="submit">Save Task</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
