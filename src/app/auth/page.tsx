"use client";

import styles from "@/src/assets/auth.module.css";
import Button from "@/src/components/Button/button";
import Field from "@/src/components/field/Field";
import Success from "@/src/components/notification/success/Success";
import { useGetValueFiled } from "@/src/hooks/useGetValueField";
import axiosInstance from "@/src/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";

// import "../globals.css";
export default function AuthPage() {
	const router = useRouter();
	const [reg, setReg] = useState<string>("");
	const [btnActive, setBtnActive] = useState<string>("");

	const {
		onChangeEmail,
		onChangePassword,
		onChangeName,
		name,
		password,
		email,
		svg,
	} = useGetValueFiled();

	const [data, setData] = useState(null);

	return (
		<div className={styles.container}>
			{/* <div className={styles.icon_panda}>
				{password ? (
					<Image src={icon_panda_active} alt="" width={200} height={100} />
				) : (
					<Image src={icon_panda} alt="" width={200} height={100} />
				)}
			</div> */}

			<form
				className={`${reg === "SignUp" ? styles.form_reg : styles.form_auth}`}
				action=""
			>
				<span className={styles.title}>
					{reg === "SignUp" ? "Sign up" : "Sign in"}
				</span>

				<div className={styles.fields}>
					<Field type="email" placeholder="Email" onChange={onChangeEmail} />
					<Field
						type="password"
						placeholder="Password"
						onChange={onChangePassword}
					/>
					<Field type="text" placeholder="Your name" onChange={onChangeName} />
				</div>
				<div className={styles.buttons}>
					<Button
						active={""}
						text="Sign in"
						onclick={(e: React.FormEvent<HTMLButtonElement>) => {
							e.preventDefault();
							setReg("SignIn");
							setBtnActive("");
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
									alert(error);
									return <Success text={error} />;
								});
						}}
					/>
					<Button
						active={`${btnActive === "active" ? "active" : ""}`}
						text="Sign up"
						onclick={(e: React.FormEvent<HTMLButtonElement>) => {
							e.preventDefault();
							setReg("SignUp");
							setBtnActive("active");
						}}
					/>
				</div>
			</form>
		</div>
	);
}
