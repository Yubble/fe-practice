// 链表节点
class Node {
  constructor(key) {
    this.next = null
    this.value = key
  }
}

// 链表对象
class SingleList {
  constructor() {
    this.size = 0
    this.head = new Node('head')
    this.currNode = ''
  }

  find(item) {
    let currNode = this.head

    while (currNode && (currNode.value !== item)) {
      currNode = currNode.next
    }

    return currNode
  } // 在链表中查找item元素
  insert(item, element) {
    let itemNode = this.find(item)

    if (!itemNode) {
      return
    }

    let newNode = new Node(element)

    newNode.next = itemNode.next
    itemNode.next = newNode

    this.size++
  }
  remove(item) {
    if (!this.find(item)) {
      return
    }

    // 试图删除头结点
    if (item === 'head') {
      if (!(this.isEmpty())) {  // 如果当前链表为空，则删除head头是不允许的
        return
      } else {  // 如果不为空，则将head头的下一个指针置为null
        this.head.next = null
        return
      }
    }

    // 从头开始循坏
    let currNode = this.head

    while (currNode.next.value !== item) {
      // 试图删除不存在的节点
      if (!currNode.next) {
        return
      }
      currNode = currNode.next
    }

    currNode.next = currNode.next.next
    this.size--
  }
  append(item) { // 从链表尾部增加元素
    let newNode = new Node(item)
    let currNode = this.findLast()

    currNode.next = newNode
    this.size++
  }
  findLast() { // 获取链表最后一个元素
    let currNode = this.head
    while(currNode.next) {
      currNode = currNode.next
    }
    return currNode
  }
  isEmpty() {
    return this.size === 0
  }
  show() {
    console.log(this.currNode.data)
  }
  getLength() {
    return this.size
  }
  advance(n, currNode = this.head) { // 从当前节点前移n个位置
    this.currNode = currNode
    while((n--) && this.currNode.next) {
      this.currNode = this.currNode.next
    }
    return this.currNode
  }
  display() {
    let result = ''
    let currNode = this.head

    while (currNode) {
      result += currNode.value
      currNode = currNode.next
      if (currNode) {
        result += '->'
      }
    }
    console.log(result)
  }
  clear() {
    this.head.next = null
    this.size = 0
  }
}

