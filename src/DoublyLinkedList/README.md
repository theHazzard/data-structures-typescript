# Doubly Linked List

A data structure that contains a **head**, **tail** and **length** properties

Doubly Linked Lists consist of nodes, and each **node** has a **value**, a **next** pointer to the next node, and a **previous** pointer to the previous node

![Double Linked List](../../assets/DoubleLinkedList.png)

### Notes
- delete using pop is constant over time at all times, unlike with single linked lists.
- doubly linked lists are almost identical to singly linked lists except their nodes have a pointer to the previous node
- doubly linked lists are better that singly linked lists on finding nodes, it can be done in half the time
- they take up more memory because of the extra pointer

## Big O
| Method          | Big(0)      |
| -----------     | ----------- |
| push            | O(1)        |
| pop             | O(1)        |
| shift           | O(1)        |
| unshift         | O(1)        |
| get             | O(N)*       |
| set             | O(N)*       |
| insert          | O(N)*       |
| remove          | O(N)*       |

\* being a doubly linked list the bigO of this methods is O(N/2), but it stills simplifies to O(N) 