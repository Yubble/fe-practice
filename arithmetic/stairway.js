/**
 * @Name: 
 * @Description: 爬楼梯详解
 * @Author: 刘燕保
 * @Date: 2021-12-13 17:16:35
 **/

const stairway = stairs => {
  if (stairs <= 2) return stairs
  let next1 = 2
  let next2 = 1
  let res = 0
  for (let i = 3; i <= stairs; i++) {
    res = next1 + next2
    next2 = next1
    next1 = res
  }

  return res
}

var climbStairs = function(n) {
  if(n ===1 || n===0){
      return 1;
  }else{
      var pre = 1;
      var cur = 1;
      for(var i = 2; i <= n; i++){
          cur = pre + cur;
          pre = cur - pre;
      }
      return cur
  }
}

const res = stairway(5)
console.log('res is ', res)

console.log(climbStairs(5))
