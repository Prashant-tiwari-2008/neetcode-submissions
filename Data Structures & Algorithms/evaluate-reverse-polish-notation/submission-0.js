class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const operations = {
            "+" : (a,b) => a + b,
            "-" : (a,b) => a - b,
            "*" : (a,b) => a * b,
            "/" : (a,b) => Math.trunc(a / b)
        }
        for(const token of tokens){
            if(token in operations){
                const b = stack.pop();
                const a = stack.pop();
                const result = operations[token](a,b);
                stack.push(result)
            }else{
                stack.push(Number(token))
            }
        }
    return stack[0];
    }
}

