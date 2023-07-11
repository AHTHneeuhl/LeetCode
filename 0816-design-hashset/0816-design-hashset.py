class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class MyHashSet:

    def __init__(self):
        self.size = 1000
        self.buckets = [None] * self.size

    def add(self, key: int) -> None:
        index = self._hash(key)
        if not self.buckets[index]:
            self.buckets[index] = Node(key)
        else:
            curr = self.buckets[index]
            while True:
                if curr.val == key:
                    return
                if not curr.next:
                    break
                curr = curr.next
            curr.next = Node(key)

    def remove(self, key: int) -> None:
        index = self._hash(key)
        if not self.buckets[index]:
            return
        if self.buckets[index].val == key:
            self.buckets[index] = self.buckets[index].next
            return
        prev, curr = self.buckets[index], self.buckets[index].next
        while curr:
            if curr.val == key:
                prev.next = curr.next
                return
            prev, curr = prev.next, curr.next

    def contains(self, key: int) -> bool:
        index = self._hash(key)
        curr = self.buckets[index]
        while curr:
            if curr.val == key:
                return True
            curr = curr.next
        return False

    def _hash(self, key):
        return key % self.size


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)