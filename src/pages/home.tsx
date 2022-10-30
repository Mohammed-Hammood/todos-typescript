import React, { useEffect, useState } from 'react';
import 'styles/home-page.scss';
import { Form, Todos, ControlPanel } from 'components';
import { TodosTypes } from 'types';

function HomePage() {
  const [todosList, setTodosList] = useState<TodosTypes[]>([]);
  const [filterBy, setFilterBy] = useState<string>("All");

  useEffect(() => {
  }, [todosList])
  return (
    <main>
      <div className='main_wrapper'>
        <div className='title'>
          <h1>Todos</h1>
        </div>
        <div className='todos_wrapper'>
          <Form
            setTodosList={setTodosList}
            todosList={todosList}
          />
          <Todos 
            setTodosList={setTodosList}
            todosList={todosList}
            filterBy={filterBy}
          />
          <ControlPanel
            setFilterBy={setFilterBy}
            setTodosList={setTodosList}
            todosList={todosList}
            filterBy={filterBy} />
        </div>
      </div>
    </main>
  );
}

export default HomePage;