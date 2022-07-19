function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function LinkedList() {
  this.head = null;

  this.addFirst = (value) => {
    let node = new ListNode(value);
    node.next = this.head;
    this.head = node;
  };
}

const mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(null);
  let head = dummy;

  let current1 = list1;
  let current2 = list2;

  if (current1 == null && current2 == null) return null;

  while (current1 !== null && current2 !== null) {
    if (current1.val <= current2.val) {
      dummy.next = current1;
      current1 = current1.next;
    } else {
      dummy.next = current2;
      current2 = current2.next;
    }
    dummy = dummy.next;
  }

  if (current1 == null) dummy.next = current2;
  if (current2 == null) dummy.next = current1;

  return head.next;
};

let list1 = new LinkedList();
let list2 = new LinkedList();

list1.addFirst(new ListNode(4));
list1.addFirst(new ListNode(2));
list1.addFirst(new ListNode(1));

list2.addFirst(new ListNode(4));
list2.addFirst(new ListNode(3));
list2.addFirst(new ListNode(1));

console.log(mergeTwoLists(list1, list2));
