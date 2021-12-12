/**
 * @Name: 
 * @Description: 公鸡5元一只，母鸡3元一只，小鸡1元3只，100元要买100只鸡？有多少买法？
 * @Author: 刘燕保
 * @Date: 2021-12-12 20:17:45
 **/

const countChickens = () => {
  for (let g = 0; g <= 20; g++) {
    for (let m = 0; m <= 33; m++) {
      for (let x = 0; x <= 100; x++) {
        // 因为1块钱买3只小鸡，所以小鸡个数与钱的比例关系就是3/1，那么已知x只小鸡，花费的金额j就是3j=x，j=x/3
        if ((g + m + x === 100) && (g*5 + m*3 + x/3 === 100)) {
          console.log(`此时等于100只且100块，公鸡${g}只，母鸡${m}只，小鸡${x}只`)
        }
      }
    }
  }
}

countChickens()