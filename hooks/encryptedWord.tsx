type Enscrepted = {
	input:string;
	secret:string;
}

function simpleEncryptDecrypt(props:Enscrepted) {
	let output = '';

	for (let i = 0; i < props.input.length; i++) {
		output += String.fromCharCode(
			props.input.charCodeAt(i) ^ props.secret.charCodeAt(i % props.secret.length)
		);
	}
	return output;
}

export default function outputText() {
	const originalText = 'Просто тест';
	const secretKey = 'секретныйКлюч';
	const encryptedText = simpleEncryptDecrypt(originalText, secretKey);
	const decryptedText = simpleEncryptDecrypt(encryptedText, secretKey);

	return (
		<div>
			<h1 className='text-slate-300'>{encryptedText}</h1>{' '}
		</div>
	);
}
