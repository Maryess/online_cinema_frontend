export function useCoding(codingWord: string, secretWord: string) {
	let excryptWord = '';

	for (let i = 0; i < codingWord.length; i++) {
		excryptWord += String.fromCharCode(
			codingWord.charCodeAt(i) ^ secretWord.charCodeAt(i % secretWord.length)
		);

		return excryptWord;
	}
}
