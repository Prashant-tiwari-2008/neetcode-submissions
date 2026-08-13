class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let newWord1 = word1.split('');
        let newWord2 = word2.split('');
        let result = [];
        while(newWord1.length > 0 && newWord2.length > 0){
            result.push(newWord1.shift());
            result.push(newWord2.shift());
        }
         result.push(...newWord1, ...newWord2);
        return result.join('');
    }
}
