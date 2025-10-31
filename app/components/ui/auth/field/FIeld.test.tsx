import { fireEvent, render, screen } from "@testing-library/react";
import Field from "./Field";

describe("проверка на работоспособность input", () => {
	test("изменение onChange", () => {
		const func = jest.fn();

		render(<Field onChange={func} value="" placeholder="введите текст" />);

		const input = screen.getByPlaceholderText(/введите текст/i);

		fireEvent.change(input, { target: { value: "hello" } });

		expect(func).toHaveBeenCalled();
	});
});
