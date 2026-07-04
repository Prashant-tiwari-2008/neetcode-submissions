class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {let left = 1; 
        let right = Math.max(...piles);
            let result = right;
            
                // Helper function to check if a speed is feasible
                    const canEatAll = (speed) => {
                            let totalHours = 0;
                                    for (const bananas of piles) {
                                                // Calculate ceiling division without floating-point issues
                                                            totalHours += Math.ceil(bananas / speed);
                                                                    }
                                                                            return totalHours <= h;
                                                                                };
                                                                                
                                                                                    // 2. Perform Binary Search
                                                                                        while (left <= right) {
                                                                                                let mid = Math.floor(left + (right - left) / 2);
                                                                                                
                                                                                                        if (canEatAll(mid)) {
                                                                                                                    result = mid;       // mid is a valid speed, record it
                                                                                                                                right = mid - 1;    // Try to find a slower valid speed
                                                                                                                                        } else {
                                                                                                                                                    left = mid + 1;     // Too slow! Increase the speed
                                                                                                                                                            }
                                                                                                                                                                }
                                                                                                                                                                
                                                                                                                                                                    return result;}
}
