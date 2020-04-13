function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null || l2 !== null) {
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      list.next = new ListNode(l2.val)
      l2 = l2.next
    }
    list = list.next
  }

  list.next = l1 || l2;

  return head.next;
};
