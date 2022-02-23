# Singly Linked List

A data structure that contains a **head**, **tail** and **length** properties

Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null

![Singly Link Lists](../../assets/SingleLinkedList.png)

### Notes
- It's a good alternative to arrays when insertion and deletion at the beginning is frequently required
- Array contains a built in index, Linked lists does not
- The idea of list data structure that consists of nodes is the fundation for other data structures like Stacks and Queues


### Lists

- Do not have indexes
- Connected via nodes with a next pointer
- Random access is not posible (you have to visit previous nodes)

### Arrays

- Indexed in order
- Insertion and deletion can be expensive (if you add/remove from the beginning)
- Can be accessed quick by index number

## Big O
| Method          | Big(0)      |
| -----------     | ----------- |
| push            | O(1)        |
| pop             | O(N)        |
| shift           | O(1)        |
| unshift         | O(1)        |
| get             | O(N)        |
| set             | O(N)        |
| insert          | O(N)        |
| remove          | O(N)        |
| immutableReverse| O(N)        |
| reverse         | O(N)        |
