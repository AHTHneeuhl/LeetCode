class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        new_strings = [word.split(separator) for word in words]
        return [string for strings in new_strings for string in strings if string != ""]