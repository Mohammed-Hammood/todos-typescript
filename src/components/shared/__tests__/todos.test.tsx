import { render } from '@testing-library/react';
import { Todos } from "components"
import { TodosTypes } from 'types';

const FakeTodosList: TodosTypes[] = [
    {
        id: new Date,
        name: "I want to learn Reactjs",
        status: "Active"
    }
]
test("render todos into the dom", () => {
    const { container } = render(<Todos todosList={FakeTodosList} setTodosList={() => { }} filterBy='All' />);
    const todosWrapper = container.querySelector(".todo") as HTMLDivElement;
    expect(todosWrapper).toHaveTextContent("I want to learn Reactjs");

});
