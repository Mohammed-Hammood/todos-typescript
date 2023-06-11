
import React from 'react';
import { ICONS } from 'components';

interface Props {
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
    todoName:string;
    setTodoName: (todoName:string)=> void;
}

export default function Form(props: Props) {
    const { handleSubmit, todoName, setTodoName } = props;

    return (
        <div className='form_wrapper'>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* I don't know if this button is for sorting todos or for submit, but I considered it as for submit */}
                <button className='btn' type='submit'>
                    <ICONS name='angle-down' color='lightgray' />
                </button>
                <input type="text"
                    placeholder='What need to be done?'
                    data-testid="text-input"
                    value={todoName}
                    onChange={(e) => setTodoName((e.target as HTMLInputElement).value)}
                    id="text-input"
                />
            </form>
        </div>
    );
}