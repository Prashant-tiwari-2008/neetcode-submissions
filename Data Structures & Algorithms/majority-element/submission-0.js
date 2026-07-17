class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let frq = {};
        for(let char of nums){
            frq[char] = (frq[char] || 0) + 1;
            if(frq[char] >( nums.length / 2 )){
                return char;
            }
        }
    }
}
