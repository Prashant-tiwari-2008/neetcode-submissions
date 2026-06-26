class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        let set = new Set();
        let i = 0;
        for(let j = 0; j < s.length; j++){  
            while(set.has(s[j])){
                set.delete(s[i]);
                i++;
            }
            set.add(s[j])
            max = Math.max(max, j-i+1)
        }
        return max
    }
}
