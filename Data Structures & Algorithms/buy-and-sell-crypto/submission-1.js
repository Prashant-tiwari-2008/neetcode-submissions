class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxp = 0;
        let minBuy = prices[0]

        for(let sell of prices){
            maxp = Math.max(maxp, sell-minBuy);
            minBuy = Math.min(minBuy, sell);
        }
        return maxp;
    }
}
