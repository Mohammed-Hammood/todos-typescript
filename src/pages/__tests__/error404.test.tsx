import { screen, render } from "@testing-library/react";
import Error404 from 'pages/error404';
import { BrowserRouter } from "react-router-dom";

test("render home page", () => {
    render(
        <BrowserRouter>
            <Error404 />
        </BrowserRouter>
    );
    expect(screen.getByText("Page not found")).toBeInTheDocument();
})