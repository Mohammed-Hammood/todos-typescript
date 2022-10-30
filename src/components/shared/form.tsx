

import React, { useState } from 'react';
import { TodosTypes } from 'types';
import ICONS from './icons';

interface Props {
    todosList: TodosTypes[];
    setTodosList: (todoId: TodosTypes[]) => void
}

export default function Form(props: Props) {
    const [inputValue, setInputValue] = useState<string>('');
    const { setTodosList, todosList } = props;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            const newTodo: TodosTypes = {
                id: new Date(),
                name: inputValue,
                status: "Active",
            }
            setTodosList([...todosList, newTodo]);
            setInputValue('');
        }
    }
    return (
        <div className='form_wrapper'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button className='btn' type='submit'>
                    <ICONS name='angle-down' color='lightgray' />
                </button>
                <input type="text" placeholder='What need to be done?' 
                    data-testid="text-input"
                value={inputValue} onChange={(e) => setInputValue((e.target as HTMLInputElement).value)} id="text-input" />
            </form>
        </div>
    );
}