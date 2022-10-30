

import React from 'react';
import { TodosTypes } from 'types';

interface Props {
    todosList: TodosTypes[];
    setFilterBy: (filterBy: string) => void;
    setTodosList: (todoId: TodosTypes[]) => void
    filterBy: string
}

export default function ControlPanel(props: Props) {
    const { setFilterBy, setTodosList, filterBy, todosList } = props;
    const clearCompletedTodos = (): void => {
        const newTodosList = todosList.filter((item) => item.status !== 'Completed');
        setTodosList(newTodosList);
    }
    const activeTodosCount: number = todosList.filter(item => item.status === "Active").length;

    return (
        <div className='control-panel'>
            <div className='left-group'>
                <div className='text'>
                    {activeTodosCount} {activeTodosCount > 1 ?"items ":"item "} left
                </div>
            </div>
            <div className='center-group'>
                <button className={filterBy === 'All' ? 'btn active_btn' : 'btn'} type='button' onClick={() => { setFilterBy("All") }}>All</button>
                <button className={filterBy === 'Active' ? 'btn active_btn' : 'btn'} type='button' onClick={() => { setFilterBy("Active") }}>Active</button>
                <button className={filterBy === 'Completed' ? 'btn active_btn' : 'btn'} type='button' onClick={() => { setFilterBy("Completed") }}>Completed</button>
            </div>
            <div className='right-group'>
                <button className='btn' type='button' onClick={() => clearCompletedTodos()}>Clear completed</button>
            </div>
        </div>
    );
}