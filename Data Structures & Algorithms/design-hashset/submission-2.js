class MyHashSet {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        for(let ele of this.arr){
            if(ele ==  key){
                return
            }
        }
        this.arr.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
          for(let i=0; i< this.arr.length;i++){
            if(this.arr[i]==key){
                this.arr.splice(i,1)
            }
        }
    }

    //   remove(key) {
    //     // Simpler way: find the exact index and splice it out safely
    //     const index = this.arr.indexOf(key);
    //     if (index !== -1) {
    //         this.arr.splice(index, 1);
    //     }
    // }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        for(let i=0; i< this.arr.length;i++){
            if(this.arr[i]==key){
                return true
            }
        }
        return false;
    }
    //  contains(key) {
    //     // Simpler way: check if index exists
    //     return this.arr.indexOf(key) !== -1;
    // }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
