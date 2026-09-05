class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // 1st way =>
        // return nums.sort();

        // 2nd way =>
        const count = new Int32Array(3);
        for(let num of nums){
            count[num]++;
        }
        let index = 0;
        for(let i = 0; i < 3; i++){
            while(count[i]-- > 0){
                nums[index++] = i
            }
        }
        
    }
}
