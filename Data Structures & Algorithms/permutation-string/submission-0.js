class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
         if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);

    // Build frequency arrays
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        windowCount[s2.charCodeAt(i) - 97]++;
    }

    // Count how many letters currently match
    let matches = 0;

    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === windowCount[i]) {
            matches++;
        }
    }

    let left = 0;

    for (let right = s1.length; right < s2.length; right++) {

        // If all 26 letters match
        if (matches === 26) {
            return true;
        }

        // Incoming character
        let index = s2.charCodeAt(right) - 97;
        windowCount[index]++;

        if (windowCount[index] === s1Count[index]) {
            matches++;
        } else if (windowCount[index] === s1Count[index] + 1) {
            matches--;
        }

        // Outgoing character
        index = s2.charCodeAt(left) - 97;
        windowCount[index]--;

        if (windowCount[index] === s1Count[index]) {
            matches++;
        } else if (windowCount[index] === s1Count[index] - 1) {
            matches--;
        }

        left++;
    }

    return matches === 26;

    }
}
