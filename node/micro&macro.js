/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-18 20:11:50
 **/

setTimeout(() => {
    console.log(1)
    Promise.resolve().then(() => {
        console.log(2)
    })
    setTimeout(() => { console.log(0) }, 10)
    console.log(5)
})

setTimeout(() => {
    console.log(3)
    Promise.resolve().then(() => {
        console.log(4)
    })
    setTimeout(() => {console.log(6)})
})

// 1523460