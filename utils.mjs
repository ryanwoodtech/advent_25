import { readFile } from 'fs/promises'

export function getInput() {
	return readFile('./input.txt', 'utf8', (err, data) => {
		if (err) {
			console.error(err)
			return
		}
		console.log(data)
	})
}
