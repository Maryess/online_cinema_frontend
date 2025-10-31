import Heading from "./Heading";
import { render, screen } from "@testing-library/react";

test("заголовок указывает наименование блока", () => {
	render(<Heading title="текст" />);

	const headingElement = screen.getByText("текст");

	expect(headingElement).toBeInTheDocument();
});

