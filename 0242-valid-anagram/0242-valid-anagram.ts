function isAnagram(s: string, t: string): boolean {
  return JSON.stringify([...s].sort()) === JSON.stringify([...t].sort());
};