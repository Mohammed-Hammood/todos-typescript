import { render } from "@testing-library/react";
import { ICONS } from "components";

test('render icons on the screen', () => {
    const { container } = render(<ICONS name="circle"/>);
    const svgElement = container.querySelector("[xmlns='http://www.w3.org/2000/svg']") as HTMLImageElement
    expect(svgElement.classList.toString()).toContain('icon');
})