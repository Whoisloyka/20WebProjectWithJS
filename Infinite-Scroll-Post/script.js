/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  if (l1 === null || l2 === null) return null

  // using dummyHead can simplify linked list's calculation, dummyHead.next points to the new linked list
  let dummyHead = new ListNode(0)
  let cur1 = l1
  let cur2 = l2
  let cur = dummyHead // cur is for the calculation in new linked list
  let carry = 0 // carry-over symbol

  while (cur1 !== null || cur2 !== null) {
    let val1 = cur1 !== null ? cur1.val : 0
    let val2 = cur2 !== null ? cur2.val : 0
    let sum = val1 + val2 + carry
    let newNode = new ListNode(sum % 10) // the result of sum%10 ranges from 0 to 9, which is the value of the current digit
    carry = sum >= 10 ? 1 : 0 // sum>=10, carry=1, so carry-over exists here
    cur.next = newNode
    cur = cur.next

    if (cur1 !== null) {
      cur1 = cur1.next
    }

    if (cur2 !== null) {
      cur2 = cur2.next
    }
  }

  if (carry > 0) {
    // If there's still carry-over in the end, then add a new node
    cur.next = new ListNode(carry)
  }

  return dummyHead.next
}
// addTwoNumbers(l1, l2)
