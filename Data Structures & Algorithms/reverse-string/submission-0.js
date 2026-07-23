class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
          let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // In-place swap using ES6 destructuring
        [s[left], s[right]] = [s[right], s[left]];
        
        // Move pointers closer to the middle
        left++;
        right--;
    }
    }
}
