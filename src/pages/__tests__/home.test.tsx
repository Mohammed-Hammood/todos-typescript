import {screen, render } from "@testing-library/react";
import HomePage from 'pages/home';


test("render home page", ()=> {
    render(<HomePage />);
    expect(screen.getByText("Todos")).toBeInTheDocument();
})