// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;
    
    // Step 1: Interleave cloned nodes right after their originals
    // Transforming: A -> B into A -> A' -> B -> B'
    let curr = head;
    while (curr) {
        const nextNode = curr.next;
        const copyNode = new Node(curr.val);
        
        curr.next = copyNode;
        copyNode.next = nextNode;
        
        curr = nextNode;
    }
    
    // Step 2: Tie the random pointers to the interleaved nodes
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }
    
    // Step 3: Untangle and extract the newly created deep copy
    curr = head;
    const pseudoHead = new Node(0);
    let copyIter = pseudoHead;
    
    while (curr) {
        const nextOriginal = curr.next.next;
        
        // Isolate the copy node
        const copyNode = curr.next;
        copyIter.next = copyNode;
        copyIter = copyNode;
        
        // Revert the original node back to normal
        curr.next = nextOriginal;
        
        curr = nextOriginal;
    }
    
    return pseudoHead.next;
    }
}
