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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {if (!head || !head.next) {
                return false;
                    }

                        let slow = head;
                            let fast = head;

                                // Traverse the list safely checking fast's boundaries
                                    while (fast && fast.next) {
                                            slow = slow.next;         // Moves 1 step
                                                    fast = fast.next.next;    // Moves 2 steps
                                                            // If they meet, a cycle exists
                                                                    if (slow === fast) {
                                                                                return true;
                                                                                        }
                                                                                            }

                                                                                                // Fast reached the end, so no cycle exists
                                                                                                    return false;
    }
}
