import { useState } from "react";

export const useGetValueFiled = () => {
	const [name, setName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [post, setPost] = useState<string>("");
	const [svg,setSvg] =useState<boolean>(true);

	const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value);
	};

	const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);

	};

	const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

	return {
		onChangeName,
		onChangeEmail,
		onChangePassword,
		onSubmit,
		name,
		password,
		email,
		svg
	};
};
