/*
Definition for singly-linked list.

@param {ListNode} l1
@param {ListNode} l2
@return {ListNode}
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function (l1, l2) {
  const head = new ListNode(0);
  let point = head;
  let carry = 0;
  const run = function (l1, l2, point) {
    if (!l1 && !l2) {
      if (carry == 1) {
        point.next = new ListNode(1);
      }
      return head.next;
    }
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    if (sum > 9) {
      point.next = new ListNode(sum % 10);
      carry = 1;
    } else {
      point.next = new ListNode(sum);
      carry = 0;
    }
    return run(l1 ? l1.next : null, l2 ? l2.next : null, point.next);
  };
  return run(l1, l2, point);
};
