// 创建可迭代类

class Classroom {
  constructor (students) {
    this.students = students
  }
  entry (newStudent) {
    this.students.push(newStudent)
  }
  // 自定义迭代方法
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
      return: () => {    //监听迭代器停止
        console.log("迭代器提前终止了~")
        return { done: true, value: undefined }
      }
    }
  }
}

const cr = new Classroom(['学生1', '学生2', '学生3'])

console.log('---- ... ----', ...cr)

const cr_Iterable = cr[Symbol.iterator]()
console.log('--- cr_Iterable next is ---', cr_Iterable.next())

for (let stu of cr) {
  console.log('---- stu is ----', stu)
}

// console.log('---- cr is ----', cr)