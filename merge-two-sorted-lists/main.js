const mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      list.next = new ListNode(l2.val)
      l2 = l2.next
    }
  }

  return head
};

const caseL1 = [1, 2, 4];
const caseL2 = [1, 3, 4];
  // 1->1->2->3->4->4

// console.log(mergeTwoLists(caseL1, caseL2));
