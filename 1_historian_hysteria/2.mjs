import { log } from "console";
import { getInput } from "../utils.mjs"

async function task() {
	const input = await getInput()
	const [leftColumn, rightColumn] = formatRows(input)
	const similarityScore = calculateSimularityScore(leftColumn, rightColumn)

	log(similarityScore)
}

// Better
function calculateSimularityScore(leftColumn, rightColumn) {
	return leftColumn.reduce((totalSimilarityScore, leftDistance) => {
		const matches = rightColumn.filter(rightDistance => leftDistance == rightDistance).length
		return totalSimilarityScore + leftDistance * matches
	}, 0)
}

// Works
//function calculateSimularityScore(leftColumn, rightColumn) {
//	const similarityScores = []
//	leftColumn.forEach((leftDistance) => {
//		let matches = 0;
//		rightColumn.forEach((rightDistance) => {
//			if (leftDistance == rightDistance) matches++
//		})
//		similarityScores.push(leftDistance * matches)
//	})
//	return similarityScores.reduce((prev, curr) => prev + curr)
//}

//function calculateDistance(leftColumn, rightColumn) {
//	const distances = []
//	leftColumn.forEach((leftDistance, index) => {
//		const rightDistance = rightColumn[index]
//		distances.push(Math.abs(leftDistance - rightDistance))
//	})
//	return distances.reduce((prev, curr) => prev + curr
//	)
//}

function formatRows(input) {
	let leftColumn = [];
	let rightColumn = [];

	const split_input = input.split('\n')
	split_input.forEach(row => {
		const split_row = row.split(',')
		leftColumn.push(split_row[0])
		rightColumn.push(split_row[1])
	})

	leftColumn = leftColumn.filter(Boolean).sort()
	rightColumn = rightColumn.filter(Boolean).sort()

	return [leftColumn, rightColumn]
}


task()

/*
--- Part Two ---
Your analysis only confirmed what everyone feared: the two lists of location IDs are indeed very different.

Or are they?

The Historians can't agree on which group made the mistakes or how to read most of the Chief's handwriting, but in the commotion you notice an interesting detail: a lot of location IDs appear in both lists! Maybe the other numbers aren't location IDs at all but rather misinterpreted handwriting.

This time, you'll need to figure out exactly how often each number from the left list appears in the right list. Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.

Here are the same example lists again:

3   4
4   3
2   5
1   3
3   9
3   3
For these example lists, here is the process of finding the similarity score:

The first number in the left list is 3. It appears in the right list three times, so the similarity score increases by 3 * 3 = 9.
The second number in the left list is 4. It appears in the right list once, so the similarity score increases by 4 * 1 = 4.
The third number in the left list is 2. It does not appear in the right list, so the similarity score does not increase (2 * 0 = 0).
The fourth number, 1, also does not appear in the right list.
The fifth number, 3, appears in the right list three times; the similarity score increases by 9.
The last number, 3, appears in the right list three times; the similarity score again increases by 9.
So, for these example lists, the similarity score at the end of this process is 31 (9 + 4 + 0 + 0 + 9 + 9).

Once again consider your left and right lists. What is their similarity score?

Your puzzle answer was 23046913.

Both parts of this puzzle are complete! They provide two gold stars: **

At this point, you should return to your Advent calendar and try another puzzle.

If you still want to see it, you can get your puzzle input.

You can also [Share] this puzzle./

*/
