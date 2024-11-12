"use client";

import Button from "@/src/components/button/button";
import Field from "@/src/components/field/Field";
import { useGetValueFiled } from "@/src/hooks/useGetValueField";
import axiosInstance from "@/src/lib/axiosInstance";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../assets/auth.module.css";
import ellipse_left from "../../public/icons/Ellipse-left.svg";
import ellipse_right from "../../public/icons/Ellipse-right.svg";
export default function AuthPage() {
	const router = useRouter();
	const [reg, setReg] = useState("Sign up");

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
		<div className={styles.container}>
			<Image className={styles.ellipse_right} src={ellipse_right} alt={""} />
			<form className={styles.main} action="">
				<div className={styles.wrapper}>
					{reg === "SignIn" ? <p>SignIn</p> : <p>SignIn</p>}
				</div>
				<div className={styles.center}>
					<Field type="email" placeholder="Email" onChange={onChangeEmail} />
					<Field
						type="password"
						placeholder="Password"
						onChange={onChangePassword}
					/>
					<Field type="text" placeholder="Your name" onChange={onChangeName} />
				</div>
				<div className={styles.bottom}>
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
					<Button
						text="SignUp"
						onclick={(e: React.FormEvent<HTMLButtonElement>) => {
							e.preventDefault();
							setReg("SignUp");
							console.log(reg);
						}}
					/>
				</div>
			</form>
			<Image className={styles.ellipse_left} src={ellipse_left} alt={""} />
		</div>
	);
}
