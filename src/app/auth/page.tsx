"use client";

import Button from "@/src/components/button/button";
import Field from "@/src/components/field/Field";
import { useEffect, useState } from "react";

export default function AuthPage() {
	const [data, setData] = useState([]);

	useEffect(() => {}, []);

	return (
		<>
			<p>fdgfg</p>
			<Field type="email" placeholder="Email" />
			<Field type="password" placeholder="Password" />
			<Field type="text" placeholder="Your name" />
			<Button text="Sign in" />
		</>
	);

	// return (
	// 	<div>
	// 		<form className={styles.auth} action=''>
	// 			<h2 className={styles.title}>Log in</h2>
	// 			<div className={styles.fields}>
	// 				<Field type='email' placeholder='Email' />
	// 				<Field type='password' placeholder='Password' />
	// 				<Field type='text' placeholder='Your name' />
	// 			</div>
	// 			<div>
	// 				<Button text='Sign in' />
	// 				<Button text=' Sign up' />
	// 			</div>
	// 		</form>
	// 	</div>
	// );
}
