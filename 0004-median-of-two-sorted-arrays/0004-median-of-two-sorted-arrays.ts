function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the shorter array
    }
    
    const x: number = nums1.length;
    const y: number = nums2.length;
    let low: number = 0;
    let high: number = x;
    
    while (low <= high) {
        const partitionX: number = (low + high) >> 1;
        const partitionY: number = ((x + y + 1) >> 1) - partitionX;
        
        const maxX: number = partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
        const maxY: number = partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
        
        const minX: number = partitionX === x ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
        const minY: number = partitionY === y ? Number.MAX_SAFE_INTEGER : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted.");
};