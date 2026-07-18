class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n) {
        if (n <= 0) return false;
        if (n === 1) return true;
        if (n % 2 !== 0) return false; 
        // Recursive call with reduced input
        return this.isPowerOfTwo(n / 2);
    }
}
