export default function Main() {
	// const [click, setClick] = useState();

	const changeValue = (event: React.MouseEvent<HTMLElement>) => {
		// setClick(click);
	};

	return (
		<div>
			<button className='border-l-orange-950'>click me</button>

			{/* {click === 1 ? (
				<div>
					<PopUp information='This app created by Masha' />
				</div>
			) : null} */}
		</div>
	);
}
