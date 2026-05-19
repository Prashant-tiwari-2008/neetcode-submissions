class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // 1. Create a frequency array of 26 zeros for 'a' through 'z'
        const count = new Array(26).fill(0);
        
        // 2. Count the occurrences of each character
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i) - 97; // 97 is the ASCII value for 'a'
            count[charCode]++;
        }
        
        // 3. Convert the array into a unique string key (e.g., "1,0,1,0...")
        const key = count.join(',');
        
        // 4. Group the original string by its frequency key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // 5. Convert the map values back into an array of arrays
    return Array.from(map.values());
}
}
