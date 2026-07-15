class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        for(let i = 0 ; i <= 1; i++){
            ans = [...ans,...nums]
        }
        return ans
    }
}
