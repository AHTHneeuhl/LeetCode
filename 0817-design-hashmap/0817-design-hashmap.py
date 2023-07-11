class ListNode:
    
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class MyHashMap:

    def __init__(self):
        self.size = 1000
        self.bucket = [None] * self.size

    def _hash(self, key):
        return key % self.size

    def put(self, key: int, value: int) -> None:
        index = self._hash(key)
        if not self.bucket[index]:
            self.bucket[index] = ListNode(key, value)
        else:
            curr = self.bucket[index]
            while True:
                if curr.key == key:
                    curr.value = value
                    return
                if not curr.next:
                    break
                curr = curr.next
            curr.next = ListNode(key, value)

    def get(self, key: int) -> int:
        index = self._hash(key)
        curr = self.bucket[index]
        while curr:
            if curr.key == key:
                return curr.value
            curr = curr.next
        return -1

    def remove(self, key: int) -> None:
        index = self._hash(key)
        curr = self.bucket[index]
        prev = None
        while curr:
            if curr.key == key:
                if prev:
                    prev.next = curr.next
                else:
                    self.bucket[index] = curr.next
                return
            prev = curr
            curr = curr.next


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)