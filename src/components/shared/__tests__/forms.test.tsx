import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodosTypes } from "types";
import {Form} from "components";

const setTodosList = (value:TodosTypes[]):void => {}

test("render text input", ()=> {
    render(<Form todosList={[]} setTodosList={setTodosList}/>);
    const inputElement = screen.getByPlaceholderText("What need to be done?")
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
});

test("enter text into input", ()=> {
    render(<Form todosList={[]} setTodosList={setTodosList}/>);
    const inputEl = screen.getByTestId("text-input");
    userEvent.type(inputEl, "I want to learn React.js");
    expect(screen.getByTestId("text-input")).toHaveValue("I want to learn React.js");
});