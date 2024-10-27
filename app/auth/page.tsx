import Button from "@/components/button/Button";
import Field from "@/components/field/Field";
import { useSession } from "next-auth/react";

export default function AuthPage() {
	const { data: session, status, update } = useSession();

	if (status === "authenticated") {
		return (
			<>
				<p>{session.user?.name}</p>
				<Field type="email" placeholder="Email" />
				<Field type="password" placeholder="Password" />
				<Field type="text" placeholder="Your name" />
				<Button
					onclick={() =>
						update({ email: "fdfdf", pssword: "6789", name: "mary" })
					}
					text="Sign in"
				/>
			</>
		);
	}

	return <a href="/api/auth">Sign in</a>;

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
