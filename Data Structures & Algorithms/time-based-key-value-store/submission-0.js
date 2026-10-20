class TimeMap {
    constructor() {
         this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const map = this.map;
        if (!map.has(key)) map.set(key, []);
        map.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.map.get(key) || [];

    let [l, r] = [0, arr.length - 1];
    let res = "";
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const [v, t] = arr[mid];
        if (timestamp === t) return v;
        if (timestamp >= t) {
            l = mid + 1;
            res = v;
        } else r = mid - 1;

    }
    return res;
    }
}
