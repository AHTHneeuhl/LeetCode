function search(nums: number[], target: number): boolean {
  const n: number = nums.length;
  if (n === 0) return false;
  let end: number = n - 1;
  let start: number = 0;

  while (start <= end) {
    const mid: number = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (!isBinarySearchHelpful(nums, start, nums[mid])) {
      start += 1;
      continue;
    }

    const pivotArray: boolean = existsInFirst(nums, start, nums[mid]);
    const targetArray: boolean = existsInFirst(nums, start, target);

    if (pivotArray !== targetArray) {
      if (pivotArray) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return false;
}

function isBinarySearchHelpful(
  nums: number[],
  start: number,
  element: number,
): boolean {
  return nums[start] !== element;
}

function existsInFirst(
  nums: number[],
  start: number,
  element: number,
): boolean {
  return nums[start] <= element;
}
