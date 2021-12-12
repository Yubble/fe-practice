/**
 * @Name: 
 * @Description: 最小深度二叉树
 * @Author: 刘燕保
 * @Date: 2021-12-12 12:37:08
 **/

const root1 = [3, 9, 20, null, null, 15, 7]
const root2 = [2,null,3,null,4,null,5,null,6]
const minDepth = root => {
  const q = [[root, 1]]

  while (q.length) {
    const [n, l] = q.shift()
    console.log('n is ', n)
    console.log('l is ', l)
    console.log('n left is ', n.left)
    console.log('n right is ', n.right)
    if (!n.left && !n.right) {
      console.log('left 与 right 都不存在')
      return l
    }
    if (n.left) {
      console.log('left 存在')
      q.push([n.left, l + 1])
    }
    if (n.right) {
      console.log('right 存在')
      q.push([n.right, l + 1])
    }
  }
}

const min = minDepth(root1)
console.log('min is ', min)
