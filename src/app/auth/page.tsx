"use client";

import Button from "@/src/components/button/button";
import Field from "@/src/components/field/Field";
import { useGetValueFiled } from "@/src/hooks/useGetValueField";
import axiosInstance from "@/src/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
	const router = useRouter();

	const {
		onChangeEmail,
		onChangePassword,
		onChangeName,
		name,
		password,
		email,
	} = useGetValueFiled();

	const [data, setData] = useState(null);

	return (
		<>
			<p>fdgfg</p>
			<form action="">
				<Field type="email" placeholder="Email" onChange={onChangeEmail} />
				<Field
					type="password"
					placeholder="Password"
					onChange={onChangePassword}
				/>
				<Field type="text" placeholder="Your name" onChange={onChangeName} />
				<Button
					text="Sign in"
					onclick={(e: React.FormEvent<HTMLButtonElement>) => {
						e.preventDefault();
						axiosInstance
							.post("/auth", {
								email: email,
								password: password,
								name: name,
							})
							.then((response) => {
								router.push("/home");
							})
							.catch((error) => {
								console.log(error);
							});
					}}
				/>
			</form>
		</>
	);
}
