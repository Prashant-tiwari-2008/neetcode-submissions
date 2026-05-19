class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    // Create an object to store sorted strings as keys and arrays of original words as values
    const map = {};

    for (const str of strs) {
        // Sort the current string to create a "canonical" version
        const sortedStr = str.split('').sort().join('');
        
        // If the key doesn't exist, initialize it with an empty array
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }
        
        // Push the original string into the corresponding anagram group
        map[sortedStr].push(str);
    }

    // Return the grouped arrays
    return Object.values(map);
    
    } 
}
