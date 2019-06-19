# [返回](../readMe.md)
# 关于js的面试题以及考核点

## 考核JS中的声明提前和作用域
```
<!-- Demo1：考核局部和全局作用域关系；考核var声明提前 -->
var global = 'monkey';
function getGlobal() {
    console.log(global); //undefined
    var global = 'cat';
}
getGlobal();
<!-- Demo2-1：考核let和const不会声明提前，变量的生命周期（声明、定义、初始化）
 -->
var global = 'monkey';
function getGlobal() {
    console.log(global); //monkey
}
getGlobal();
<!-- Demo2-2：考核let和const不会声明提前，变量的生命周期
 -->
var global = 'monkey';
function getGlobal() {
    console.log(global); //抛异常
    let global = 'getGlobal';
}
getGlobal();
<!-- Demo2-3：考核let和const不会声明提前，变量的生命周期
 -->
var global = 'monkey';
function getGlobal() {
    console.log(global); //monkey
    let globals = 'getGlobal';
}
getGlobal();
```