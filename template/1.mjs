import { log } from "console"
import { getInput } from "../utils.mjs"

async function task() {
	const input = await getInput()
	log(input)
}

task()
