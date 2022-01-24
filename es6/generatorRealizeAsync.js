function doTask1() {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(1111),
      1111
    )
  })
}

function doTask2() {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(2222),
      2222
    )
  })
}

function runner(gen) {
  const g = gen()
  function run(arg) {
    console.log('arg is ', arg)
    let result = g.next(arg)
    if (result.done) {
      console.log('done', result)
    } else {
      console.log('result.value is ', result.value)
      return Promise.resolve(result.value).then(run)
    }
  }
  run()
}

runner(function* () {
  const result1 = yield doTask1('task1 params')
  console.log('result1 is ', result1)
  const result2 = yield doTask2('task2 params')
  console.log('result2 is ', result2)
})
