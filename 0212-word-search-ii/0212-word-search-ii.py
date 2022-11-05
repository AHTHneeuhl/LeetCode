class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        
        class TrieNode:
            def __init__(self):
                self.children = {}
                self.endOfWord = False
                self.word = None
                self.wcount = 0
            def addWord(self, word):
                node = self
                for c in word:
                    if c not in node.children:
                        node.children[c] = TrieNode()
                    node = node.children[c]
                    node.wcount +=1
                node.endOfWord = True
                node.word = word
        
        trieRoot = TrieNode()
        for w in words:
            trieRoot.addWord(w)
        trieRoot.wcount = len(words)
        visit = set()
        result = []
        ROWS, COLS = len(board), len(board[0])
        direction = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        def dfs(r, c, trieNode):
            if (trieNode.wcount == 0 or 
                r < 0 or r == ROWS or 
                c < 0 or c == COLS or 
                (r, c) in visit or 
                board[r][c] not in trieNode.children):
                return False
            
            visit.add((r, c))
            if board[r][c] not in trieNode.children:
                return False
            childNode = trieNode.children[board[r][c]]
            found = False
            if childNode.endOfWord == True:
                result.append(childNode.word)
                childNode.endOfWord = False
                childNode.wcount -=1
                trieNode.wcount -=1
                found = True
            for r_inc, c_inc in direction:
                nr = r + r_inc
                nc = c + c_inc
                if dfs(nr, nc, childNode):
                    trieNode.wcount -=1
                    found = True
            visit.remove((r, c))
            return found
        
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] in trieRoot.children:
                    dfs(r, c, trieRoot)
        return result