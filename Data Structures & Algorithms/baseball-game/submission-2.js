class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let newStack = [];
        let sum = 0;
        for(let ele of operations){
            if(ele == "C"){
                sum -= newStack.pop();
            }else if(ele == "D"){
                let newValue = newStack[newStack.length-1] * 2;
                newStack.push(newValue);
                sum += newValue;
            }else if(ele == "+"){
              let newValue = newStack[newStack.length -2] + newStack[newStack.length-1];
              newStack.push(newValue);
              sum += newValue;
            }else{
                newStack.push(parseInt(ele))
                sum += parseInt(ele);
            }
        }

        return sum;
    }
}
