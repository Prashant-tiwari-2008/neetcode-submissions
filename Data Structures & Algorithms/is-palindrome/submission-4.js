class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalizedString = s.replaceAll(/[^A-Z^a-z^0-9]/g, '').toLowerCase()
        return normalizedString === normalizedString.split('').reverse().join('')
    }
}