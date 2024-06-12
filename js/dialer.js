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

function countPaths(startingDigit, hopCount, count = 0) {
	if (hopCount === 0) {
		count++;
		return count;
	}

	const reachable = knightMoves[startingDigit];

	reachable.forEach(digit => {
		count = countPaths(digit, hopCount - 1, count);
	});

	return count;
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
