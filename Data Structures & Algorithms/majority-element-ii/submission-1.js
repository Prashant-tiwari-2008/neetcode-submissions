class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let frequency = nums.length/3;
        let hashMap = {}
        let result = new Set();
        for(let ele of nums){
            hashMap[ele] = (hashMap[ele] || 0) + 1;
            if(hashMap[ele] > frequency){
                result.add(ele)
            }
        }
        return [...result];
    }
}
