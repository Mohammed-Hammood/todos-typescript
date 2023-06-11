import React from 'react';
import { Sort, SortTypes } from 'utils/types';


interface Props {
    setSort: (sort: SortTypes) => void;
    sort: SortTypes;
    activeTodosCount: number;
    deleteCompletedTodos: ()=> void;
}

export default function ControlPanel(props: Props) {
    const { setSort, sort,  activeTodosCount, deleteCompletedTodos } = props;


    return (
        <div className='control-panel'>
            <div className='left-group'>
                <div className='text'>
                    {activeTodosCount} {activeTodosCount > 1 ? "items " : "item "} left
                </div>
            </div>
            <div className='center-group'>
                <button
                    className={sort === Sort.All ? 'btn active_btn' : 'btn'}
                    type='button'
                    onClick={() => setSort(Sort.All)}
                >
                    All
                </button>
                <button
                    className={sort === Sort.Active ? 'btn active_btn' : 'btn'}
                    type='button'
                    onClick={() => setSort(Sort.Active)}
                >
                    Active
                </button>
                <button
                    className={sort === Sort.Completed ? 'btn active_btn' : 'btn'}
                    type='button'
                    onClick={() => setSort(Sort.Completed)}
                >
                    Completed
                </button>
            </div>
            <div className='right-group'>
                <button
                    className='btn'
                    type='button'
                    onClick={deleteCompletedTodos}
                >
                    Clear completed
                </button>
            </div>
        </div>
    );
}