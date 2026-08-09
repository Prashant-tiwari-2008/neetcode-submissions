class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(arr) {
        if (arr.length <= 1) {
        return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = this.sortArray(arr.slice(0, mid));
        const right = this.sortArray(arr.slice(mid));
        return this.merge(left, right);
    }

    merge(left, right) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}
}
