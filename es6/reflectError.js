const user = {
    name: 'rose',
    job: 'boss'
}

Object.freeze(user)
try {
    Object.defineProperty(user, 'name', {
        set(newVal) {
            user['name'] = newVal
        }
    })
} catch(err) {
    console.log('调解报错')
}
user.name = '432'


if(!Reflect.defineProperty(user, 'job', {
    set(newVal) {
        user['job'] = newVal
    }
}))
{
    console.log('调解报错')
}
user.job = 'developer'