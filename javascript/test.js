function foo() {
  this.name = '张三'
  console.log(this);
}

const a = new foo();
console.log(a)
