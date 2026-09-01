class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
       // Pointer for the last slot in nums1 (where the largest number goes)
    let last = m + n - 1;
    
    // Pointers for the actual tracking elements in nums1 and nums2
    let p1 = m - 1;
    let p2 = n - 1;
    
    // Merge in reverse order
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[last] = nums1[p1];
            p1--;
        } else {
            nums1[last] = nums2[p2];
            p2--;
        }
        last--;
    }
    
    // If there are leftover elements in nums2, fill them in.
    // (If nums1 has leftovers, they are already in their correct places!)
    while (p2 >= 0) {
        nums1[last] = nums2[p2];
        p2--;
        last--;
    }
    }
}
