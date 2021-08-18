/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-18 20:11:50
 */

setTimeout(() => {
    console.log(1)
    Promise.resolve().then(() => {
        console.log(2)
    })
    setTimeout(() => { console.log(0) }, 0)
    for (let i=0, j=0; i < 999; i++) {
        j = i
    }
    console.log(5)
}, 0)

setTimeout(() => {
    console.log(3)
    Promise.resolve().then(() => {
        console.log(4)
    })
}, 0)
