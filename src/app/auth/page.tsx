"use client";

import Button from "@/src/components/button/button";
import Field from "@/src/components/field/Field";
import { useGetValueFiled } from "@/src/hooks/useGetValueField";
import axiosInstance from "@/src/lib/axiosInstance";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/src/assets/auth.module.css";
import icon_panda_active from "@/src/public/icons/panda_active.svg";
import icon_panda from "@/src/public/icons/panda.svg";

// import "../globals.css";
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
		svg
	} = useGetValueFiled();

	const [data, setData] = useState(null);

	return (
		<div className={styles.container}>		
						<div className={styles.icon_panda}>
							{password? 
							<Image src={icon_panda_active} alt="" width={200} height={100}/>
							:<Image src={icon_panda} alt="" width={200} height={100} />}
							</div> 
					
								
			<form className={`${reg === "SignUp"?styles.form_reg :styles.form_auth }`} action="">
				<span className={styles.title}>
					{reg === "SignUp" ? 'Sign Up' : 'Sign In'}
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
						text="Sign in"
						onclick={(e: React.FormEvent<HTMLButtonElement>) => {
							e.preventDefault();
							setReg("SignIn");
							// axiosInstance
							// 	.post("/auth", {
							// 		email: email,
							// 		password: password,
							// 		name: name,
							// 	})
							// 	.then((response) => {})
							// 	.catch((error) => {
							// 		console.log(error);
							// 	});
						}}
					/>
					<button
						className={styles.button}
						onClick={(e: React.FormEvent<HTMLButtonElement>) => {
							e.preventDefault();
							setReg("SignUp");
							console.log(reg);
						}}
					>
						Sign up
					</button>
				</div>
			</form>
			
		</div>
	);
}
