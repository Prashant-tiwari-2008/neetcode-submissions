class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let length = nums.length;
        if(length == 0) return false;

        let tempSet = new Set();
       for(let num of nums){
        if(tempSet.has(num)){
            return true;
        }else{
            tempSet.add(num)
        }
       }
        return false
    }
}