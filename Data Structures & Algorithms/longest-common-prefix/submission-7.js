class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let cp = strs[0];
        // for(let i = 0; i < cp.length; i++){
        //     for(let j = 1; j <strs.length; j++){
        //         if(cp[i] !== strs[j][i]){
        //             cp = cp.slice(0,i);
        //             break;
        //         }
        //     }
        // }
        // return cp;/


        
         for(let i = 1; i < strs.length; i++){
                for(let j = 0; j < cp.length; j++){
                        if(cp[j] !== strs[i][j]){
                        cp = cp.slice(0, j);
                        break;
                    }
                }
            }
            return cp;
            
    }
   
}

