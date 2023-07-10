function groupAnagrams(strs: string[]): string[][] {
  const res: string[][] = [];
  if (strs.length === 0) return res;

  const map: { [key: string]: string[] } = {};
  for (const s of strs) {
    const key = [...s].sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }

  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      res.push(map[key]);
    }
  }

  return res;
};