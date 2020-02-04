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
  let append = 0;
  const run = function (l1, l2, point) {
    if (l1 === null && l2 === null) {
      if (append == 1) {
        point.next = new ListNode(1);
      }
      return head.next;
    }


  };
  return run(l1, l2, point)
};
