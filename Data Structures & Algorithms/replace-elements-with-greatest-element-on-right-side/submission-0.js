class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1;
        for (let i = arr.length - 1; i >= 0; i--) {
            let currentVal = arr[i]; // Store the original value temporarily
            arr[i] = rightMax;       // Replace current element with the max seen so far    
            // Update the maximum value encountered for the next iterations to the left
             rightMax = Math.max(rightMax, currentVal);
        }
        return arr;
    }
}
