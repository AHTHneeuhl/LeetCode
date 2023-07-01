function strStr(haystack: string, needle: string): number {
    if (!needle) {
        return 0;
    } else if (haystack.indexOf(needle) === -1) {
        return -1;
    } else {
        return haystack.split(needle)[0].length;
    }
};