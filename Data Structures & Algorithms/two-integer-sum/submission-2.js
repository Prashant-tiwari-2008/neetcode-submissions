class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let tempMap = new Map();
      for(let i = 0; i < nums.length; i++){
        let Complement = target - nums[i];
        if(tempMap.has(Complement)){
            return [tempMap.get(Complement),i]
        }
        tempMap.set(nums[i],i);
      }
    }
}

