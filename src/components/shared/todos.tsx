
import React from 'react';
import { TodosTypes } from 'types';
import ICONS from './icons';
import styled from 'styled-components'

interface Props {
    todosList: TodosTypes[];
    filterBy: string;
    setTodosList: (todosList: TodosTypes[]) => void
}

const TodosListWrapper = styled.div`
        width:100%;
        max-width:600px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 28px;
        z-index: 1;
        .todo {
            display:flex;
            align-items:center;
            gap:10px;
            padding:15px 10px;
            border-bottom:1px solid lightgray;
            .Completed {
                text-decoration: line-through;
                color:#D7D7D7;
            }
        }
        .todo:first-child {
            border-top:1px solid lightgray;
            box-shadow: 0 -7px 5px rgba(150, 150, 150, 0.1);
        }
`;
interface LayersProps {
    $layersCount: number
}
const Layers = styled.div<LayersProps>`
        background: white;
        height: 30px;
        z-index: ${props => -1 * props.$layersCount - 1};
        position: relative;
        margin:auto;
        margin-top: -30px;
        width:calc(100% - 10px - ${props => props.$layersCount * 10 + "px"});
        transform: translateY(${props => props.$layersCount * 8 + 50 + "px"});
        display: flex;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export function Todos(props: Props) {
    const { filterBy, todosList, setTodosList } = props;
    const layersCount = todosList.filter((item) => item.status === filterBy || filterBy === 'All').length;
        
    const completedToggle = (todoId: Date): void => {
        const todo = todosList.find((todo) => todo.id === todoId);
        if (todo) {
            todo.status = todo.status === 'Active' ? "Completed" : "Active";
            const newTodosList = todosList.map((item) => { return (item.id === todoId ? (todo) : item) });
            setTodosList(newTodosList)
        }
    }
    return (<> 
        <TodosListWrapper className='todos_list'>
            {todosList.map((todo, index: number) => {
                if (todo.status === filterBy || filterBy === 'All') return (
                    <div className='todo' key={index}>
                        <div className='checkbox'>
                            <button className='btn' type='button' onClick={() => completedToggle(todo.id)} title={todo.status}>
                                <ICONS name={todo.status === 'Active' ? 'circle' : 'circle-check-regular'} color={todo.status === 'Active' ? 'lightgray' : 'green'} />
                            </button>
                        </div>
                        <div className={todo.status}>
                            {todo.name}
                        </div>
                    </div>
                )
                return null;
            })}
        </TodosListWrapper>
        {(Array.from({ length: layersCount }).map((item, index:number) => { return (<Layers $layersCount={index} key={index}></Layers>) }))}
    </>
    );
}