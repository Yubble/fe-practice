const arr = ['a', 'b', 'c', 'd'];
const nums = [11, 22, 33];
 
function createArrayIterator(arr) {
  let index = 0;
  // 1. 返回这个迭代器对象
  return {
    // 2. 必须实现next方法
    next() {
      // 3. 返回两个参数 done -> 是否完成   value : 值   执行完后index++
      return { done: index >= arr.length, value: arr[index++] };
    }
  };
}
 
const arrIterator = createArrayIterator(arr);
console.log(arrIterator.next()); // { done: false, value: 'a' }
console.log(arrIterator.next()); // { done: false, value: 'b' }
console.log(arrIterator.next()); // { done: false, value: 'c' }
console.log(arrIterator.next()); // { done: false, value: 'd' }
console.log(arrIterator.next()); // { done: true, value: undefined }
console.log(arrIterator.next()); // { done: true, value: undefined }
 
const numsIterator = createArrayIterator(nums);
console.log(numsIterator.next()); // { done: false, value: 11 }
console.log(numsIterator.next()); // { done: false, value: 22 }
console.log(numsIterator.next()); // { done: false, value: 33 }
console.log(numsIterator.next()); // { done: true, value: undefined }
console.log(numsIterator.next()); // { done: true, value: undefined }
console.log(numsIterator.next()); // { done: true, value: undefined }
