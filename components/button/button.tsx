type Button = {
	text: string;
};

export default function Button(props: Button) {
	return (
		<button className=' text-black text-center bg-green-400 '>
			{props.text}
		</button>
	);
}
