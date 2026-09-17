class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        for(let a of asteroids){
            while (stack.length && a < 0 && stack[stack.length - 1] > 0) {
                const diff = a + stack[stack.length - 1];
                if(diff < 0){
                    stack.pop();
                }else if(diff > 0){
                    a = 0;
                }else{
                    a = 0;
                    stack.pop()
                }

            }
            if(a !== 0){
                stack.push(a);
            }
        }

        return stack;
    }
}

// withou stack solution
// let n = asteroids.length;
//         let j = -1;

//         for (let a of asteroids) {
//             while (j >= 0 && asteroids[j] > 0 && a < 0) {
//                 if (asteroids[j] > Math.abs(a)) {
//                     a = 0;
//                     break;
//                 } else if (asteroids[j] === Math.abs(a)) {
//                     j--;
//                     a = 0;
//                     break;
//                 } else {
//                     j--;
//                 }
//             }
//             if (a !== 0) {
//                 asteroids[++j] = a;
//             }
//         }

//         return asteroids.slice(0, j + 1);