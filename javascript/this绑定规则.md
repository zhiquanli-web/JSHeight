#### 绑定规则优先级

默认规则 < 隐式绑定 < 显式绑定 < new 绑定

#### 默认绑定

```js
//  独立函数调用(没有绑定到某个对象上进行调用)

function test() {
  console.log(this);
}

test(); // window
```

#### 隐式绑定

```js
//  通过某个对象进行调用(通过某个对象发起的函数调用)

function test() {
  console.log(this);
}

var obj = {
  name: "张三",
  test: test,
  test1: () => {
    console.log(this);
  },
};
obj.test(); // obj { name: '张三', test: [Function: test] }
obj.test1(); // window
```

#### 显示绑定

```js
//  call apply, bind
```

#### 显式绑定

```js
//  call apply, bind
```

#### new绑定

```js
// new 绑定会执行一下操作
// 1. 创建一个全新的对象
// 2. 这个新对象会被执行prototype连接
// 3. 这个新对象会绑定到函数调用的this上
// 4. 如果函数没有返回其它对象，表达式会返回这个新对象
function foo() {
  this.name = '张三'
}

const a = new foo();
console.log(a) // { name: '张三' }
```