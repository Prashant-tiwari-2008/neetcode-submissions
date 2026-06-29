class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length < 2) return false
    let newStack = [];
    for(let char of s){
        if(char === "(" || char === "{" || char === "[" ){
            newStack.push(char)
        }else{
           let lastChar = newStack.pop();
            if(
                (lastChar === "(" && char === ')') || 
                (lastChar === "{" && char === "}") || 
                (lastChar === '[' && char === ']')
            )
            {
                continue;
            }
            else{
                return false;
            }    
        }
    }
    return  newStack.length == 0 ? true : false

    }
}
