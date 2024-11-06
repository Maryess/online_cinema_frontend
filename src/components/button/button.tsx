import { MouseEventHandler } from 'react';
import style from './Button.module.css';

interface Button {
	onclick?: MouseEventHandler<HTMLButtonElement>;
	text: string;
}

export default function Button({ text, onclick }: Button) {
	return (
		<button onClick={onclick} className={style.button}>
			{text}
		</button>
	);
}
