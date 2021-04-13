---
title: 상속 패턴 종류
description: 상속 패턴 종류 설명
category: "javascript"
cover: js.png
date: "2017-03-01"
tags:
  - tag
---

대부분 객체 지향 언어는 메서드 시그니처만을 상속하는 인터페이스 상속과 실제 메서드를 상속하는 구현 상속 두 가지의 타입을 지원한다. 하지만 자바스크립트 함수에는 시그니처가 없으므로 인터페이스 상속이 불가능하며 구현 상속만을 지원한다. 구현 상속은 대게 프로토타입 체인을 통해 이루어진다.

## 생성자 패턴

![Pattern-new](/images/inheritancePattern/pattern_new.png)

```js
function Fn() {}
var fn = new Fn();
```

함수를 포함해 객체 멤버 어떤 것도 재사용 불가능하다는 단점이 있다.

## 프로토타입 체인

![Pattern-Prototype-Chain](/images/inheritancePattern/prototype_chain.png)

```js
function Fn() {}
Fn.prototype.test = function () {};
var fn1 = new Fn();
var fn2 = new Fn();
console.log(fn1.test === fn2.test); // true
```

공유할 메서드, 프로퍼티를 프로토타입에 할당한다. 프로토타입 객체는 함수에서 생성된 인스턴스에서 공유함으로 독자적인 사용이 어렵다.

## 생성자 훔치기

```js
function FnA(age) {
  this.age = age;
  this.names = ["lee", "kim"];
}
function FnB(age) {
  FnA.call(this, age);
}
var fnA = new FnA(22);
var fnB = new FnB(27);
fnB.names.push("park");
console.log(fnA.age, fnB.age); // 22 27
console.log(fnA.names, fnB.names); // ['lee', 'kim'] ['lee', 'kim', 'park']
```

1. 상위 생성자 함수에 매개변수 전달할 수 있다.
2. 인스턴스의 프로퍼티를 독자적으로 사용할 수 있다.
3. 메서드를 생성자 내부에서만 정의해야 하므로 함수 재사용이 불가능하다.
4. 상위 타입의 프로토타입에 정의된 메서드는 하위 타입에서 접근할 수 없다.

## 의사 클래스 상속 패턴

![Pattern-Class-Inheritance](/images/inheritancePattern/pattern_class_inheritance.png)

```js
function FnA() {}
FnA.prototype.testA = function () {
  return "testA";
};
function FnB() {}
FnB.prototype = new FnA();
Object.defineProperty(FnB.prototype, "constructor", { enumerable: false, value: FnB });
var fnB = new FnB();
console.log(fnB.testA()); // 'testA'
```

1. 객체 리터럴로 생성된 객체에 사용하기 어렵다.
2. new 연산자의 위험성이 존재한다.
3. 고유 프로퍼티는 생성자 패턴을 이용하고 공용 프로퍼티는 프로토타입 체인을 이용한다.

## 조합 상속

![Pattern-Combination-Inheritance](/images/inheritancePattern/pattern_combination_inheritance.png)

```js
function FnA(name) {
  this.name = name;
  this.colors = ["black", "white"];
}
FnA.prototype.test = function () {
  return "test";
};
function FnB(name) {
  FnA.call(this, name);
  this.age = 27;
}
FnB.prototype = new FnA();
var fnA = new FnA("kim");
var fnB = new FnB("lee");
fnB.colors.push("red");
console.log(fnA.colors, fnB.colors);
console.log(fnB, fnB.test());
```

1. 프로토타입 체인과 생성자 훔치기 패턴을 조합
2. 참조 값 공유에 대한 문제 해결 가능
3. 상위 생성자 함수에 매개변수 전달 가능
4. new 연산자의 위험성 존재
5. 하위 프로토타입에 생성된 상위 타입의 인스턴스 프로퍼티는 사용되지 않아 비효율적이다.

## 프로토타입 상속

![Pattern-Prototype-Inheritance](/images/inheritancePattern/pattern_prototype_inheritance.png)

```js
var obj = {
  test: function () {
    return "test";
  },
};
function Fn() {}
Fn.prototype = Object.create(obj);
var fn = new Fn();
console.log(fn.test()); // 'test'
```

```js
// 폴리필
if (!Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
```

1. 상속할 객체를 받아 생성자 함수의 prototype 객체로 설정하고 인스턴스 반환
2. 객체 리터럴로 생성된 객체도 사용할 수 있다.

## 기생 상속

![Pattern-Parasitism](/images/inheritancePattern/pattern_parasitism.png)

```js
function createAnother(original) {
  var clone = new Object(original);
  clone.sayHi = function () {
    console.log("Hi");
  };
  return clone;
}
var person = {
  name: "lee",
  friends: ["kim", "su", "ma"],
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); // Hi
```

1. 리터럴 방식의 객체를 주로 고려할 때 사용
2. 생성자 함수 패턴과 비슷한 함수의 재사용과 비효율

> **객체 복사**  
> 얕은 복사: 객체의 참조 값을 얻는 것이 아니라 객체 자체를 복사한다. 하지만 객체의 프로퍼티 값이 참조 값인 경우까지 복사하지 않는다.  
> 깊은 복사: 객체와 객체 프로퍼티 참조 값 모든 것을 복사한다.

## 기생 조합 상속

![Pattern-Combination-Inheritance](/images/inheritancePattern/pattern_combination_parasitism.png)

```js
function inheritPrototype(subType, superType) {
  var prototype = Object(superType.prototype);
  Object.defineProperty(prototype, "constructor", { enumerable: false, value: subType });
  subType.prototype = prototype;
}
function FnA(name) {
  this.name = name;
  this.colors = ["black", "white"];
}
FnA.prototype.sayName = function () {
  console.log(this.name);
};
function FnB(name, age) {
  FnA.call(this, name);
  this.age = age;
}
inheritPrototype(FnB, FnA);
FnB.prototype.sayAge = function () {
  console.log(this.age);
};
var fnB = new FnB("lee", 27);
fnB.sayName(); // 'lee'
fnB.sayAge(); // 27
```

1. new 연산자의 위험성이 줄어든다.
2. 공유 메서드의 재사용성이 증가한다.
3. 고유 프로퍼티를 지정할 수 있다.
