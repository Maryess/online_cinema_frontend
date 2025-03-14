import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './auth.module.scss'
import { IAuth } from './auth.interface'
import Heading from 'components/ui/heading/Heading'
import AuthFields from './AuthFields'
import Button from 'components/ui/auth/button/Button'
import Meta from 'utils/meta/Meta'
import { useActions } from 'hooks/useAction'
import { useAuthRedirect } from './useAuthRedirect'

const Auth:FC = () => {
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
        <div className={styles.auth}>    
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Heading title='Auth'/>
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
        </div>
        </Meta>
    );
}

export default Auth