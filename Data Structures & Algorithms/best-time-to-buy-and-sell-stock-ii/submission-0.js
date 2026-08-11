class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    
    maxProfit(prices) {
        let total_benefit = 0;
        for(let i = 0; i < prices.length; i++){
            if(prices[i] > prices[i-1]){
                total_benefit += prices[i] - prices[i-1];
            }
        }
        return total_benefit;
    }

}
