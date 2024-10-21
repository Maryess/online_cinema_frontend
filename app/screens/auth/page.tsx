import styles from './auth.module.scss';

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
						<input type='text' placeholder='Email' />
						<input type='text' placeholder='Password' />
						<input type='text' placeholder='Name' />
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
