'use client';

import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';

export default function Search() {
	const [search, setSearch] = useState(false);

	function showSearch() {
		setSearch(prev => !prev);
	}

	return (
		<div>
			<LuSearch onClick={showSearch} width={60} height={60} />

			{search === true ? <p className='text-white'>show</p> : <p>onShow</p>}
		</div>
	);
}
