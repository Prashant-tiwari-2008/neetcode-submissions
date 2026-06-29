class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
         if (t.length > s.length) return "";

    const need = new Map();

    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    const window = new Map();

    let formed = 0;
    const required = need.size;

    let left = 0;

    let minLength = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {

        const ch = s[right];

        window.set(ch, (window.get(ch) || 0) + 1);

        if (
            need.has(ch) &&
            window.get(ch) === need.get(ch)
        ) {
            formed++;
        }

        while (formed === required) {

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                start = left;
            }

            const leftChar = s[left];

            window.set(leftChar, window.get(leftChar) - 1);

            if (
                need.has(leftChar) &&
                window.get(leftChar) < need.get(leftChar)
            ) {
                formed--;
            }

            left++;
        }
    }

    return minLength === Infinity
        ? ""
        : s.substring(start, start + minLength);

    }
}
