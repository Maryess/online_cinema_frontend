'use client';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Search.module.css';

export default function Search() {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className={styles.section}>
			<CiSearch
				className={styles.svg_search}
				onClick={() => setShowSearch(prev => !prev)}
				width={30}
				height={30}
			/>
			{showSearch === true ? (
				<input className={styles.search} type='text' />
			) : null}
		</div>
	);
}
