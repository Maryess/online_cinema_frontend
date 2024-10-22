import Button from '@/components/button/button';
import Field from '@/components/field/Field';
import styles from './auth.module.css';

export default function AuthPage() {
	return (
		<div>
			<div className={styles.left_element}>
				<div className={styles.element_top}></div>
				<div className={styles.element_bottom}></div>
			</div>
			<div className={styles.auth}>
				<form className={styles.auth_form} action=''>
					<h2 className={styles.title}>Log in</h2>
					<div className={styles.fields}>
						<Field type='email' placeholder='Email' />
						<Field type='password' placeholder='Password' />
						<Field type='text' placeholder='Your name' />
					</div>
					<div>
						<Button text='Log in' />
						<Button text='Sign in' />
					</div>
				</form>
			</div>
			<div className={styles.right_element}>
				<div className={styles.element_top}></div>
				<div className={styles.element_bottom}></div>
			</div>
		</div>
	);
}
