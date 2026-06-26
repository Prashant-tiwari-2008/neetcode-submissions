class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
          const freq = new Map();

    let left = 0;
    let maxFreq = 0;
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        freq.set(ch, (freq.get(ch) || 0) + 1);

        maxFreq = Math.max(maxFreq, freq.get(ch));

        while ((right - left + 1) - maxFreq > k) {
            const leftChar = s[left];
            freq.set(leftChar, freq.get(leftChar) - 1);
            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
    }
}
