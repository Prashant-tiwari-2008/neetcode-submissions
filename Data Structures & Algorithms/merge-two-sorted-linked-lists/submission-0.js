/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
         // Create a dummy node to act as the starting anchor
    const dummy = new ListNode(-1);
    let current = dummy;

    // Traverse both lists while they both have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next; // Move list1 pointer forward
        } else {
            current.next = list2;
            list2 = list2.next; // Move list2 pointer forward
        }
        current = current.next; // Move the merged list pointer forward
    }

    // Append the remaining nodes of whichever list is not empty
    current.next = list1 !== null ? list1 : list2;

    // Return the actual head of the merged list (skipping dummy)
    return dummy.next;
    }
}
