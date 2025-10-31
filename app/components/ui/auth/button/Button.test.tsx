import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("проверка на работоспособность кнопки", () => {
	test("вызов onClick при нажатии", () => {
		const func = jest.fn();

		render(<Button onClick={func}>Click on me</Button>);

		const button = screen.getByRole("button", { name: /click on me/i });

		fireEvent.click(button);

		expect(func).toHaveBeenCalled();
	});
});






