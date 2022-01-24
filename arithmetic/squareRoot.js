/**
 * @Name: 计算平方根
 * @Description: 计算平方根
 * @Author: 刘燕保
 * @Date: 2021-12-25 17:17:08
 **/

const mySqrt = function(x) {
  let lo = 0, hi = x, mid;

  while(lo <= hi) {
    mid = Math.ceil((lo+hi)/2)
    if (mid * mid === x) return mid
    if (mid * mid < x) {
      lo = mid + 1
      console.log('lo is ', lo)
    } else {
      hi = mid - 1
      console.log('hi is ', hi)
    }
  }

  return Math.floor(hi)
}

const res = mySqrt(7)

console.log('res is ', res)
