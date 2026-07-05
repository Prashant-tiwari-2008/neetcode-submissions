class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        // If the array is not rotated at all
        if (nums[left] <= nums[right]) {
            return nums[left];
        }

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            // If middle element is greater than rightmost element,
            // the minimum must be in the right half.
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // Otherwise, the minimum is in the left half (including mid)
                right = mid;
            }
        }

        return nums[left];
    }
}
