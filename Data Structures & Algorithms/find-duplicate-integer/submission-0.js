class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
          let tortoise = nums[0];
    let hare = nums[0];

    do {
        tortoise = nums[tortoise];          // Moves 1 step
        hare = nums[nums[hare]];            // Moves 2 steps
    } while (tortoise !== hare);

    // Phase 2: Find the entrance to the cycle (the duplicate number)
    tortoise = nums[0];                     // Reset tortoise to the beginning
    
    while (tortoise !== hare) {
        tortoise = nums[tortoise];          // Both move at the same speed now
        hare = nums[hare];
    }

    return hare;
    }
}
