const names = ["aaa", "bbb", "ccc"]

function* createArrayIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

const namesIterator = createArrayIterator(names)
console.log(namesIterator.next()) // {value: 'aaa', done: false}
console.log(namesIterator.next()) // {value: 'bbb', done: false}
console.log(namesIterator.next()) // {value: 'ccc', done: false}
console.log(namesIterator.next()) // {value: undefined, done: true}

for (let i of namesIterator) {
  console.log('--- i is ---', i)
}