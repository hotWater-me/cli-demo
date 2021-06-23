import test1 from './test1.js'

const adder = new Function("a", "b", "return a + b");

console.log(adder(2, 6), 'adder(2, 6)')
