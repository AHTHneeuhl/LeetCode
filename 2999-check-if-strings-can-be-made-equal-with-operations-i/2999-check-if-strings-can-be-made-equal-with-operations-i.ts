function canBeEqual(s1: string, s2: string): boolean {
    if (s1 === s2) {
        return true;
    }
    if (s1 === s2[2] + s2[1] + s2[0] + s2[3]) {
        return true;
    }
    if (s1 === s2[0] + s2[3] + s2[2] + s2[1]) {
        return true;
    }
    if (s1 === s2[2] + s2[3] + s2[0] + s2[1]) {
        return true;
    }
    return false;
};