import Button from '@/components/button/button';

type User = {
	name: string;
	password: string;
};

export default function User() {
	return (
		//layout
		//Menu-hamburger

		<div className='mx-'>
			<div className='text-center max-w-40'>
				<Button text='Your favorite films' />
			</div>
		</div>
	);
}
