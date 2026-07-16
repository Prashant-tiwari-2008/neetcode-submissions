class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
           let cp = strs[0];
    for(let i = 1; i < strs.length; i++){
        for(let j = 0; j < cp.length; j++){
                if(cp[j] !== strs[i][j]){
                cp = cp.slice(0, j);
                break;
            }
        }
    }
    return cp;
    }
}
