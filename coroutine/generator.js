function *gen() {
	let v = yield;
	console.log(v);
	v = yield;
	console.log(v);
}

const it = gen();
console.log('--- it is ---', it)
it.next();
it.next(1); // 打印 "1"
it.next("Hello"); // 打印 "Hello"
