import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import List from "./List";
import TodoItem from "./TodoItem";
import { ITodo } from "./types/types";

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		try {
			const response = await axios.get<ITodo[]>(
				"https://jsonplaceholder.typicode.com/todos?_limit=10"
			);
			setTodos(response.data);
		} catch (e) {
			alert(e);
		}
	};
	return (
		<List
			items={todos}
			renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
		/>
	);
};

export default TodosPage;
