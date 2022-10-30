import {ControlPanel} from 'components';
import { render} from '@testing-library/react';
import { TodosTypes } from 'types';

const fakeTodosList:TodosTypes[] =[
    {
        id: new Date,
        name:"I will learn Python",
        status:"Active"
    }
]
test("test filter funtionality", ()=> {
    const {container } = render(<ControlPanel 
        setTodosList={()=>{}}
        todosList={fakeTodosList}
        filterBy="Active"
        setFilterBy={()=>{}}
        />);

    const activeButton = container.querySelector(".active_btn") as HTMLButtonElement;
    expect(activeButton).toHaveTextContent("Active");
});
test("test filter funtionality", ()=> {
    const {container } = render(<ControlPanel 
        setTodosList={()=>{}}
        todosList={fakeTodosList}
        filterBy="Completed"
        setFilterBy={()=>{}}
        />);

    const activeButton = container.querySelector(".active_btn") as HTMLButtonElement;
    expect(activeButton).not.toHaveTextContent("Active");
    expect(activeButton).not.toHaveTextContent("All");
})

