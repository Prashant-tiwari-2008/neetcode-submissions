class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphanumeric = '';
        let newString =  s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        for(let i=0; i < newString.length; i++){
            if(checkAlphanumeric(newString[i])){
                alphanumeric += newString[i];
            }
        }
        console.log(alphanumeric)

        let left = 0;
        let right = newString.length-1;
        while(left <= right){
            if(newString[left] !== newString[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}

   function checkAlphanumeric(str) {
    // Returns true only if NO non-alphanumeric characters are found
    return !/[^a-z0-9]/.test(str);
    }