export default {
	reachableKeys,
	countPaths,
	listAcyclicPaths
};


// ****************************
const knightMoves = [
	[4, 6],
	[6, 8],
	[7, 9],
	[4, 8],
	[3, 9, 0],
	[],
	[1, 7, 0],
	[2, 6],
	[1, 3],
	[2, 4]
];

function reachableKeys(startingDigit) {
	return knightMoves[startingDigit];
}

function countPaths(startingDigit, hopCount) {
	let previousPathsCount = new Array(10).fill(1);

	for (let i = 0; i < hopCount; i++) {
		const currentPathsCount = new Array(10).fill(0);

		previousPathsCount.forEach((count, digit) => {
			knightMoves[digit].forEach(reachableDigit => {
				currentPathsCount[reachableDigit] += count;
			});
		});

		previousPathsCount = currentPathsCount;
	}

	return previousPathsCount[startingDigit];
}

function listAcyclicPaths(startingDigit, visited = [], paths = []) {
	visited.push(startingDigit);

	const reachable = knightMoves[startingDigit];
	const unvisited = reachable.filter(digit => !visited.includes(digit));

	if (unvisited.length === 0) {
		paths.push(visited);
		return paths;
	}

	unvisited.forEach(digit => {
		listAcyclicPaths(digit, visited.slice(), paths);
	});

	return paths;
}
