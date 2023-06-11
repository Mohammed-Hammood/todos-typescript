import { ControlPanel } from 'components';
import { render } from '@testing-library/react';
import { Sort, TodoTypes } from 'utils/types';

const fakeTodosList: TodoTypes[] = [
    {
        id: new Date().getTime(),
        name: "I will learn Python",
        status: Sort.Active,
        createdAt: new Date().toUTCString(),
    }
]

test("test filter funtionality", () => {
    const { container } = render(
        <ControlPanel
            sort={Sort.Active}
            setSort={() => { }}
            deleteCompletedTodos={()=> {}}
            activeTodosCount={fakeTodosList.filter(item => item.status === Sort.Active).length}
        />);

    const activeButton = container.querySelector(".active_btn") as HTMLButtonElement;
    expect(activeButton).toHaveTextContent("Active");
});
test("test filter funtionality", () => {
    const { container } = render(<ControlPanel
        sort={Sort.Completed}
        setSort={() => { }}
        deleteCompletedTodos={()=> {}}
        activeTodosCount={fakeTodosList.filter(item => item.status === Sort.Active).length}
    />);

    const activeButton = container.querySelector(".active_btn") as HTMLButtonElement;
    expect(activeButton).not.toHaveTextContent("Active");
    expect(activeButton).not.toHaveTextContent("All");
})