class Stack {
  constructor(size) {
    // make properties protected usually prefixed with an underscore _
    this._size = size
    this._stack = []
  }

  isFull() {
    return (this._stack.length === this._size)
  }

  isEmpty() {
    return (this._stack.length === 0)
  }

  push(item) {
    if (!this.isFull()) {
      this._stack.push(item)
      return true
    }
    return false
  }

  pop() {
    if (!this.isEmpty()) {
      const index = this._stack.indexOf(this._stack[this._stack.length - 1])
      if (index > -1) {
        this._stack.splice(index, 1)
      }
      return true
    }
    return false
  }

  peek() {
    if (!this.isEmpty()) {
      return this._stack[this._stack.length - 1]
    }
    return 'empty'
  }

  getStack() {
    return this._stack
  }
}

let stack = new Stack(3)

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log('stack:   ', stack.getStack())
console.log('peek:    ', stack.peek())
console.log('is full: ', stack.isFull())
console.log('is empty:', stack.isEmpty(), '\n')

stack.pop()
stack.pop()
stack.pop()

console.log('stack:   ', stack.getStack())
console.log('peek:    ', stack.peek())
console.log('is full: ', stack.isFull())
console.log('is empty:', stack.isEmpty())
