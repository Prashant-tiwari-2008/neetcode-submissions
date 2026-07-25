class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const lastSeenIndexMap = new Map();

        for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // Check if the number was seen before and if it is within distance k
        if (lastSeenIndexMap.has(num) && (i - lastSeenIndexMap.get(num) <= k)) {
            return true;
        }

        // Always update the map with the latest index to minimize the distance next time
        lastSeenIndexMap.set(num, i);
    }

    return false;
    }
}
