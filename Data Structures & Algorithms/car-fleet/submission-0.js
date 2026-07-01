class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
            if (n === 0) return 0;

            // Combine position and speed, then calculate individual arrival times
            const cars = position.map((pos, index) => {    
                return {
                    pos: pos,
                    time: (target - pos) / speed[index]
                };
            });

                                                                    // Sort cars by their starting position in descending order (closest to target first)
                                                                        cars.sort((a, b) => b.pos - a.pos);

                                                                            let fleets = 0;
                                                                                let maxTimeSoFar = 0;

                                                                                    // Iterate through the sorted cars
                                                                                        for (let i = 0; i < n; i++) {
                                                                                                // If the current car takes longer than the fleet ahead, it forms a new fleet
                                                                                                        if (cars[i].time > maxTimeSoFar) {
                                                                                                                    fleets++;
                                                                                                                                maxTimeSoFar = cars[i].time; // This car is now the bottleneck for cars behind it
                                                                                                                                        }
                                                                                                                                            }

                                                                                                                                                return fleets;
    }
}
