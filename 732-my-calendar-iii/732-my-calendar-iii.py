class MyCalendarThree:

    def __init__(self):
        self.points = Counter()

    def book(self, start: int, end: int) -> int:
        self.points[start] += 1
        self.points[end] -= 1
        return max(accumulate(i for _, i in sorted(self.points.items())))


# Your MyCalendarThree object will be instantiated and called as such:
# obj = MyCalendarThree()
# param_1 = obj.book(start,end)