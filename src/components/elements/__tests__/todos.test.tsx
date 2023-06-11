import { render } from '@testing-library/react';
import { Todos } from "components"
import { Sort, TodoTypes } from 'utils/types';

const fakeTodosList: TodoTypes[] = [
    {
        id: new Date().getTime(),
        name: "I will master Reactjs",
        status: Sort.Active,
        createdAt: new Date().toUTCString(),
    }
]

test("render todos into the dom", () => {
    const { container } = render(
        <Todos
            todosList={fakeTodosList}
            layersCount={fakeTodosList.filter(item => item.status === Sort.Active).length}
            completedToggle={() => { }}
        />);
    const todosWrapper = container.querySelector(".todo") as HTMLDivElement;
    expect(todosWrapper).toHaveTextContent("I will master Reactjs");

});