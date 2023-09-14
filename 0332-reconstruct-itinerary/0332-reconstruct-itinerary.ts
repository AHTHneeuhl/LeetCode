function findItinerary(tickets: string[][]): string[] {
  const adjacencyMap: { [key: string]: string[] } = {};

    // Build an adjacency map from the given tickets
    for (const [from, to] of tickets) {
        if (!adjacencyMap[from]) {
            adjacencyMap[from] = [];
        }
        adjacencyMap[from].push(to);
    }

    // Sort the destinations in lexical order
    for (const from in adjacencyMap) {
        adjacencyMap[from].sort();
    }

    const itinerary: string[] = [];

    function dfs(city: string) {
        const destinations = adjacencyMap[city];
        while (destinations && destinations.length > 0) {
            const nextCity = destinations.shift();
            dfs(nextCity);
        }
        itinerary.unshift(city);
    }

    dfs('JFK');
    return itinerary;
};