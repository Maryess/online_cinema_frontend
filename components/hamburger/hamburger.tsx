'use client';

import { useState } from 'react';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';

export default function Hamburger() {
	const [show, setShow] = useState(false);

	function showMenu() {
		setShow(prev => !prev);
	}

	return (
		<div>
			<BsFillMenuButtonWideFill
				onClick={showMenu}
				width={60}
				height={60}
				className='bg-gray-600 '
			/>

			{show === true ? <p className='text-white'>show</p> : <p>onShow</p>}
		</div>
	);
}
