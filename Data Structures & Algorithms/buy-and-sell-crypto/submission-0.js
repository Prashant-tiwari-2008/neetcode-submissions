class Solution{
    maxProfit(prices){
    let l = 0; // Buy day
    let r = 1; // Sell day
    let maxProfit = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            maxProfit = Math.max(maxProfit, profit);
        } else {
         l = r;
        }
      r++;
    }
    return maxProfit;  
}
}
