# js基础知识集合

# js中的类型转换

## js的显式类型转换
```
储备知识：
    js基础类型：
        undeifned（Undefined）
        null（Null）
        number（Number）
        string（String）
        boolean（Boolean）
        symbol（Symbol）
        object（Object，其它function，regexp等）
    注：typeof的结果有 undeinfed,number,string,boolean,object(null, regexp),function
```
* 将其它类型转换成`number`类型的方式
```
    1、Number：除了symbol类型，可以将其它所有类型的数据转成number
    2、parseInt：将string类型转成number
    3、parseFloat：将string类型转成number浮点型
```
* 将其它类型转换成`string`类型的方式
```
    1、String：可以将所有类型（包括symbol）转成string
    2、toString：可以将所有类型转成string(null和undefined不支持)
```
* 将其它类型转换成`boolean`类型的方式
```
    1、Boolean：可以将所有类型（包括symbol）转成boolean
```
## js的隐式类型转换
`注：`<br />
`1、Symbol值不能与其他类型的值进行运算，但支持Boolean(逻辑运算)和String的类型转换`<br />
`2、对于对象类型，Number会通过调用toString进行转换后，转化成number`<br />

<table>
<thead>
<tr>
<th>运算符/类型</th>
<th>number</th>
<th>string</th>
<th>boolean</th>
<th>symbol</th>
<th>undefined</th>
<th>null</th>
<th>object</th>
<th>array</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>自增运算符（++/--）</td>
<td>数学运算</td>
<td>Number转换</td>
<td>Number转换</td>
<td>不支持</td>
<td>Number转换</td>
<td>Number转换</td>
<td>Number（会调用对象的toString转换成string）转换</td>
<td>Number（会调用对象的toString转换成string）转换</td>
<td>数学运算</td>
</tr>
<td>正负运算符（+/-）</td>
<td>数学运算</td>
<td>Number转换</td>
<td>Number转换</td>
<td>不支持</td>
<td>Number转换</td>
<td>Number转换</td>
<td>Number（会调用对象的toString转换成string）转换</td>
<td>Number（会调用对象的toString转换成string）转换</td>
<td>数学运算</td>
</tr>
<td>加运算符（+）</td>
<td>数学运算</td>
<td>字符串拼接</td>
<td>Number转换</td>
<td>不支持</td>
<td>Number转换</td>
<td>Number转换</td>
<td>Number（会调用对象的toString转换成string）转换</td>
<td>Number（会调用对象的toString转换成string）转换</td>
<td>如果操作数有string类型，就是字符串拼接运算；否者是数学运算</td>
</tr>
</tr>
<td>减、乘、除、求余运算符（-，*，/，%）</td>
<td>数学运算</td>
<td>Number转换</td>
<td>Number转换</td>
<td>不支持</td>
<td>Number转换</td>
<td>Number转换</td>
<td>Number（会调用对象的toString转换成string）转换</td>
<td>Number（会调用对象的toString转换成string）转换</td>
<td>数学运算</td>
</tr>
</tr>
<td>逻辑运算符（-，*，/，%）</td>
<td>Boolean转换</td>
<td>Boolean转换</td>
<td>Boolean转换</td>
<td>不支持</td>
<td>Boolean转换</td>
<td>Boolean转换</td>
<td>Boolean转换</td>
<td>Boolean转换</td>
<td>逻辑运算，&&、||返回原始值(即valueOf的值)；但是！返回boolean值</td>
</tr>
</tr>
<td>比较运算符（>，<，==，>=，<=，!=）</td>
<td>算术比较</td>
<td>字符串码值比较（'ba'和'b'如何比较？）</td>
<td>Number转换，进行算术比较</td>
<td>不支持</td>
<td>Number转换，进行算术比较</td>
<td>Number转换，进行算术比较</td>
<td>调用valueOf，结果为NaN；调用toString，按照以上规则进行比较</td>
<td>调用valueOf，结果为NaN；调用toString，按照以上规则进行比较</td>
<td>1、有number类型操作数就进行算术比较；2、有boolean直接转成number，进行算术比较；3、其余按照string比较码值</td>
</tr>
<tr>
<td>全等比较运算符</td>
</tr>
</tbody>
</tbale>