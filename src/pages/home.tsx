import React, { useState } from 'react';
import { Todos, ControlPanel, Form } from 'components';
import { TodoTypes, Sort } from 'utils/types';
import TodosLocalStorage from 'utils/localstorage';
import 'styles/home-page.scss';


function HomePage() {
	const localstorage = new TodosLocalStorage();
	const [todosList, setTodosList] = useState<TodoTypes[]>(localstorage.get());
	const [todoName, setTodoName] = useState<string>('');
	const [sort, setSort] = useState<Sort>(Sort.All);
	
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (todoName.trim().length > 0) {
			const newTodo: TodoTypes = {
				id: new Date().getTime(),
				name: todoName,
				status: Sort.Active,
				createdAt: new Date().toUTCString(),
			}
			const newTodosList = [...todosList, newTodo];
			setTodosList(newTodosList);
			setTodoName('');
			localstorage.set(newTodosList);
		}
	}
	const deleteCompletedTodos = (): void => {
		const newTodosList = todosList.filter((item) => item.status !== Sort.Completed);
		setTodosList(newTodosList);
		localstorage.set(newTodosList);
	}
	const completedToggle = (todoId: number): void => {
		const todo = todosList.find((todo) => todo.id === todoId);
		if (todo) {
			todo.status = todo.status === Sort.Active ? Sort.Completed : Sort.Active;
			const newTodosList = todosList.map(item => item.id === todoId ? todo : item);
			setTodosList(newTodosList);
			localstorage.set(newTodosList);
		}

	}
	const activeTodosCount: number = todosList.filter(item => item.status === "Active").length;
	const todosByFilter: TodoTypes[] = todosList.filter(item => sort === 'All' || item.status === sort);
	const layersCount: number = todosByFilter.length;

	return (
		<main>
			<div className='main_wrapper'>
				<div className='title'>
					<h1>Todos</h1>
				</div>
				<div className='todos_wrapper'>
					<Form
						{...{
							todoName,
							setTodoName,
							handleSubmit
						}}
					/>
					<Todos
						{...{
							layersCount,
							todosList: todosByFilter,
							completedToggle
						}}
					/>
					<ControlPanel
						{...{
							activeTodosCount,
							sort,
							setSort,
							deleteCompletedTodos
						}}
					/>
				</div>
			</div>
		</main>
	);
}

export default HomePage;