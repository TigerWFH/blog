# js基础知识集合

[DOM-CORE规范](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1312295772)和[DOM-HTML规范](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-31006348)

# [js中DOM](http://w3help.org/zh-cn/causes/SD9024)

[此处的结论引述自...](http://w3help.org/zh-cn/causes/SD9024)
* `在 IE6 IE7 IE8(Q) 中，无法通过脚本检测到 DOM 接口原型，故无法获得其接口继承关系。`
* `在 IE8(S) 中，只能检测到部分 DOM 接口原型，但这些原型不可枚举，故无法获得其接口继承关系。`
* `在 Firefox 中，部分 DOM 接口原型不可枚举，接口继承关系与 DOM 规范中的描述不符。`
* `在 Chrome Safari Opera 中，DOM 接口继承关系遵照了 DOM 规范中的描述。`

`Node`
```
前置数据结构：
NodeList
NamedNodeMap
DOMImplementation

interface Node {
  // NodeType
  const unsigned short      ELEMENT_NODE                   = 1;
  const unsigned short      ATTRIBUTE_NODE                 = 2;
  const unsigned short      TEXT_NODE                      = 3;
  const unsigned short      CDATA_SECTION_NODE             = 4;
  const unsigned short      ENTITY_REFERENCE_NODE          = 5;
  const unsigned short      ENTITY_NODE                    = 6;
  const unsigned short      PROCESSING_INSTRUCTION_NODE    = 7;
  const unsigned short      COMMENT_NODE                   = 8;
  const unsigned short      DOCUMENT_NODE                  = 9;
  const unsigned short      DOCUMENT_TYPE_NODE             = 10;
  const unsigned short      DOCUMENT_FRAGMENT_NODE         = 11;
  const unsigned short      NOTATION_NODE                  = 12;

  readonly attribute DOMString        nodeName;
           attribute DOMString        nodeValue;
                                        // raises(DOMException) on setting
                                        // raises(DOMException) on retrieval

  readonly attribute unsigned short   nodeType;
  readonly attribute Node             parentNode;
  readonly attribute NodeList         childNodes;
  readonly attribute Node             firstChild;
  readonly attribute Node             lastChild;
  readonly attribute Node             previousSibling;
  readonly attribute Node             nextSibling;
  readonly attribute NamedNodeMap     attributes;
  // Modified in DOM Level 2:
  readonly attribute Document         ownerDocument;
  Node               insertBefore(in Node newChild, 
                                  in Node refChild)
                                        raises(DOMException);
  Node               replaceChild(in Node newChild, 
                                  in Node oldChild)
                                        raises(DOMException);
  Node               removeChild(in Node oldChild)
                                        raises(DOMException);
  Node               appendChild(in Node newChild)
                                        raises(DOMException);
  boolean            hasChildNodes();
  Node               cloneNode(in boolean deep);
  // Modified in DOM Level 2:
  void               normalize();
  // Introduced in DOM Level 2:
  boolean            isSupported(in DOMString feature, 
                                 in DOMString version);
  // Introduced in DOM Level 2:
  readonly attribute DOMString        namespaceURI;
  // Introduced in DOM Level 2:
           attribute DOMString        prefix;
                                        // raises(DOMException) on setting

  // Introduced in DOM Level 2:
  readonly attribute DOMString        localName;
  // Introduced in DOM Level 2:
  boolean            hasAttributes();
};

```
`Document`
```
interface Document : Node {
  readonly attribute DocumentType     doctype;
  readonly attribute DOMImplementation  implementation;
  readonly attribute Element          documentElement;
  Element            createElement(in DOMString tagName)
                                        raises(DOMException);
  DocumentFragment   createDocumentFragment();
  Text               createTextNode(in DOMString data);
  Comment            createComment(in DOMString data);
  CDATASection       createCDATASection(in DOMString data)
                                        raises(DOMException);
  ProcessingInstruction createProcessingInstruction(in DOMString target, 
                                                    in DOMString data)
                                        raises(DOMException);
  Attr               createAttribute(in DOMString name)
                                        raises(DOMException);
  EntityReference    createEntityReference(in DOMString name)
                                        raises(DOMException);
  NodeList           getElementsByTagName(in DOMString tagname);
  // Introduced in DOM Level 2:
  Node               importNode(in Node importedNode, 
                                in boolean deep)
                                        raises(DOMException);
  // Introduced in DOM Level 2:
  Element            createElementNS(in DOMString namespaceURI, 
                                     in DOMString qualifiedName)
                                        raises(DOMException);
  // Introduced in DOM Level 2:
  Attr               createAttributeNS(in DOMString namespaceURI, 
                                       in DOMString qualifiedName)
                                        raises(DOMException);
  // Introduced in DOM Level 2:
  NodeList           getElementsByTagNameNS(in DOMString namespaceURI, 
                                            in DOMString localName);
  // Introduced in DOM Level 2:
  Element            getElementById(in DOMString elementId);
};
```
`HTMLDocument`
```
interface HTMLDocument : Document {
           attribute DOMString       title;
  readonly attribute DOMString       referrer;
  readonly attribute DOMString       domain;
  readonly attribute DOMString       URL;
           attribute HTMLElement     body;
  readonly attribute HTMLCollection  images;
  readonly attribute HTMLCollection  applets;
  readonly attribute HTMLCollection  links;
  readonly attribute HTMLCollection  forms;
  readonly attribute HTMLCollection  anchors;
           attribute DOMString       cookie;
                                        // raises(DOMException) on setting

  void               open();
  void               close();
  void               write(in DOMString text);
  void               writeln(in DOMString text);
  NodeList           getElementsByName(in DOMString elementName);
};
```
`Element`
```
interface Element : Node {
  readonly attribute DOMString        tagName;
  DOMString          getAttribute(in DOMString name);
  void               setAttribute(in DOMString name, 
                                  in DOMString value)
                                        raises(DOMException);
  void               removeAttribute(in DOMString name)
                                        raises(DOMException);
  Attr               getAttributeNode(in DOMString name);
  Attr               setAttributeNode(in Attr newAttr)
                                        raises(DOMException);
  Attr               removeAttributeNode(in Attr oldAttr)
                                        raises(DOMException);
  NodeList           getElementsByTagName(in DOMString name);
  // Introduced in DOM Level 2:
  DOMString          getAttributeNS(in DOMString namespaceURI, 
                                    in DOMString localName);
  // Introduced in DOM Level 2:
  void               setAttributeNS(in DOMString namespaceURI, 
                                    in DOMString qualifiedName, 
                                    in DOMString value)
                                        raises(DOMException);
  // Introduced in DOM Level 2:
  void               removeAttributeNS(in DOMString namespaceURI, 
                                       in DOMString localName)
                                        raises(DOMException);
  // Introduced in DOM Level 2:
  Attr               getAttributeNodeNS(in DOMString namespaceURI, 
                                        in DOMString localName);
  // Introduced in DOM Level 2:
  Attr               setAttributeNodeNS(in Attr newAttr)
                                        raises(DOMException);
  // Introduced in DOM Level 2:
  NodeList           getElementsByTagNameNS(in DOMString namespaceURI, 
                                            in DOMString localName);
  // Introduced in DOM Level 2:
  boolean            hasAttribute(in DOMString name);
  // Introduced in DOM Level 2:
  boolean            hasAttributeNS(in DOMString namespaceURI, 
                                    in DOMString localName);
};
```
`HTMLElement`
```
interface HTMLElement : Element {
           attribute DOMString       id;
           attribute DOMString       title;
           attribute DOMString       lang;
           attribute DOMString       dir;
           attribute DOMString       className;
};
```
`Attr`
```
interface Attr : Node {
  readonly attribute DOMString        name;
  readonly attribute boolean          specified;
           attribute DOMString        value;
                                        // raises(DOMException) on setting

  // Introduced in DOM Level 2:
  readonly attribute Element          ownerElement;
};

```
`CharacterData`
```

interface CharacterData : Node {
           attribute DOMString        data;
                                        // raises(DOMException) on setting
                                        // raises(DOMException) on retrieval

  readonly attribute unsigned long    length;
  DOMString          substringData(in unsigned long offset, 
                                   in unsigned long count)
                                        raises(DOMException);
  void               appendData(in DOMString arg)
                                        raises(DOMException);
  void               insertData(in unsigned long offset, 
                                in DOMString arg)
                                        raises(DOMException);
  void               deleteData(in unsigned long offset, 
                                in unsigned long count)
                                        raises(DOMException);
  void               replaceData(in unsigned long offset, 
                                 in unsigned long count, 
                                 in DOMString arg)
                                        raises(DOMException);
}
```
`Text`
```
interface Text : CharacterData {
  Text               splitText(in unsigned long offset)
                                        raises(DOMException);
}
```
`Comment`
```
interface Comment : CharacterData {
};
```
* 

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

`注：全等和不全等不存在类型转换，仅进行比较操作；相等和不相等先转换类型，在进行比较`