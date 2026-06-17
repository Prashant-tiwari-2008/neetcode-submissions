class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let newarr = [];
        for(let i=0; i < nums.length;i++){
            let sum = 1;    
            for(let j=nums.length-1; j >= 0; j--){
                if(i == j){
                    continue
                }
                sum = sum * nums[j]; 
            }
            newarr.push(sum)
        }
        return newarr;
    }
}
