import Button from '@/components/button/Button';

type PopUp = {
	information: string;
};

export default function PopUp(props: PopUp) {
	return (
		<div className='w-56 h-80 bg-white mx-auto flex justify-center'>
			<div className='text-center flex flex-col'>
				<span className='text-black'>{props.information}</span>
				<div className='flex justify-between bord'>
					<Button text='Go' />
					<Button text=' Next js documentation ' />
				</div>
			</div>
		</div>
	);
}
