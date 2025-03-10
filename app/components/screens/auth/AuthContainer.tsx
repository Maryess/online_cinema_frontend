import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuth } from './auth.interface';
import styles from './auth.module.scss';
import AuthItemList from './AuthFields'; // Импортируем AuthItemList
import AuthButton from './button/AuthButton';
import { useActions } from 'hooks/useAction';
import { useAuthRedirect } from './useAuthRedirect';
import Heading from 'components/ui/heading/Heading';
import Button from 'components/ui/button/Button';
import AuthFields from './AuthFields';
import { useAuth } from 'hooks/useAuht';
import Meta from 'utils/meta/Meta';

const AuthContainer = () => {
    useAuthRedirect()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuth>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuth> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

    return (
        <Meta title='Auth'>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Heading title={type}/>
            <AuthFields register={registerInput} formState={formState} />
            <div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}		
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
						>
							Register
						</Button>
					</div>
        </form>
        </Meta>
    );
};

export default AuthContainer;