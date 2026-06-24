class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        while(left < right){
            let current = Math.min(heights[left], heights[right]) * (right - left);
            console.log(current);
            if(max <= current){
                max = current;
            }
            if(heights[left] > heights[right]){
                right--;
            }else{
                left++;
            }
        }
        return max;
    }
}
