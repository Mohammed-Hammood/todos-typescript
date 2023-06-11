import { screen, render } from "@testing-library/react";
import { Form } from "components";
import { BrowserRouter } from "react-router-dom";



test("render text input", () => {
    render(
        <BrowserRouter>
            <Form
                todoName=""
                setTodoName={() => { }}
                handleSubmit={() => { }}
            />
        </BrowserRouter>
    );
    const inputElement = screen.getByPlaceholderText("What need to be done?")
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toBeInTheDocument();
});

