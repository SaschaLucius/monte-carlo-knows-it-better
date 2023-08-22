import seedrandom from 'seedrandom';

export function monteCarloLikelihoodForecast(
	historicalData: number[],
	scope: number,
	numberOfSimulations: number,
	seed: string
): { likelihood: number; completionTime: number }[] {
	if (historicalData.length <= 0 || numberOfSimulations <= 0 || scope < 0) {
		return [];
	}
	const rng = seedrandom(seed);
	const completionTimes: number[] = [];

	for (let i = 0; i < numberOfSimulations; i++) {
		let totalItems = 0;
		let rounds = 0;

		while (totalItems < scope) {
			const randomIndex = Math.floor(rng() * historicalData.length);
			const roundValue = historicalData[randomIndex];

			totalItems += roundValue;
			rounds++;
		}

		completionTimes.push(rounds);
	}

	completionTimes.sort((a, b) => a - b); // in place sorting

	const likelihoodSteps = [
		0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85,
		0.9, 0.95, 1
	];
	const results: { likelihood: number; completionTime: number }[] = [];

	likelihoodSteps.forEach((likelihood) => {
		const index = Math.floor(likelihood * (numberOfSimulations - 1)); // PERCENTILE
		const completionTime = completionTimes[index];
		results.push({ likelihood: Math.floor(likelihood * 100), completionTime });
	});

	return results;
}
