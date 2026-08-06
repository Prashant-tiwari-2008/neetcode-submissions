class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [...nums,...nums];
        // for(let i = 0 ; i <= 1; i++){
        //      ans = ans.concat(nums);
        // }
        return ans
    }
}
