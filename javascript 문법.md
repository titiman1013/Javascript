# javascript 문법

__※ javascript는 type이 없는 미친 언어이다__



### 함수

- 함수 선언

  ```javascript
  function doSomething() {
      console.log('hello');
  }
  
  function add(a, b) {
      const sum = a + b;
      return sum;
  }
  ```

  

- 함수 호출

  ```javascript
  doSomething();
  # hello
  
  const result = add(1, 2);
  console.log(result);
  # 3
  ```

  

- 응용

```javascript
function doSomething(add) {
    console.log(add);
}


doSomething(add);
# add라는 함수를 출력
doSomething(add());
# 이 때는 doSomething함수 호출보다 add의 함수호출이 먼저 이뤄진다
# NaN (Not a Number)
doSomething(add(1, 2));
# 3
```

```javascript
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result)
}


doSomething(add);
# add 함수
# 5
```

```javascript
const addFun = add;
console.log(addFun)
# add 함수
```





### 변수

- let (added in ES6)

  ```javascript
  let name = 'ellie';
  console.log(name);
  # ellie
  name = 'hello'
  console.log(name);
  # hello
  ```

- Block scope

  > block 안의 값은 접근이 불가능

  ```javascript
  {
   let name = 'ellie';
  }
  
  console.log(name);
  # 
  ```

- Global scope

  > 파일안에 바로 정의해서 쓰는 함수

  ```javascript
  let globalName = 'global name';
  {
      let name = 'ellie';
      console.log(globalName);
      # global name
  }
  
  console.log(name);
  #
  console.log(globalName);
  # global name
  ```

- var (don't ever use this!)

  > 변수를 선언하기 전에도 값의 할당이 가능
  >
  > 유연성을 가지고 있지만 선언하지도 않는 변수에 값이 할당되어 나오는 경우도 존재

  ```javascript
  age = 4;
  var age;
  ```

  - var hoisting (move declaration from bottom to top)

    > 어디에서 선언했냐에 상관없이 항상 제일위로 선언을 끌어 올려주는 것

  - var has no block scope

- constant

  > 한 번 선언하면 값이 절대 바뀌지 않음

  - favor __immutable__ data type always for a few reasons:
    - security (보안상)
    - thread safety (다양한 스레드에서 동시에 접근하여 값을 바꾸는 것을 방지)
    - reduce human mistakes

  ```javascript
  const daysInWeek = 7;
  const maxNumber = 5;
  ```





### Variable types

- primitive type

  > 더이상 나눠질 수 없는 한가지의 아이템

  - single item: number, string, boolean, null, .undefined, symbol

- object type

  > single item을 묶어서 한 box로 관리할 수 있게 해주는 것

  - bpx cpmtaomer

- function type

  > function도 다른 data type처럼 변수에 할당이 가능
  >
  > 함수의 인자로 전달이 가능하고 return type으로도 function을 return 하는 것이 가능

  - first-class function



- number

  ```javascript
  const count = 17; // integer
  const size = 17.1; // decimal number
  console.log(`value: ${count}, type: ${typeof count}`);
  # value: 17, type: number
  console.log(`value: ${size}, type: ${type of size}`);
  # value: 17,1 type: number
  ```

  - number - special numeric values: infinity, -infinity, NaN

  ```javascript
  const infinity = 1 / 0;
  const negativeInfinity = -1 / 0;
  const nAn = 'not a number' / 2;
  console.log(infinity);
  # Infinity
  console.log(negativeInfinity);
  # -Infinity
  console.log(nAn);
  # NaN
  ```

  - bigInt (fairly new, don't use it yet)

  ```javascript
  const bigInt = 123987129487293847928371n; // over (-2**53 ~ 2**53)
  console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
  # value: 123987129487293847928371. type: bigint
  Number.MAX_SAFE_INTEGER;
  ```

  

- string

  ```javascript
  const char = 'c';
  const brendan = 'brendan';
  const greeting 'hello ' + brendan;
  console.log(`value: ${greeting}, type: ${typeof greeting}`);
  # value: hello brendan, type: string
  const helloBob = `hi ${brendan}!`; // template literals (/string)
  console.log(`value: ${helloBob}, type: %{typeof helloBob}`);
  # value: hi brendan!, type: string
  ```



- boolean

  - false: 0, null, undefined, NaN, ''
  - true: any other value

  ```javascript
  const canRead = true;
  const test = 3 < 1; // false
  console.log(`value: ${canRead}, type: ${typeof canRead}`);
  # value: true, type: boolean
  console.log(`value: ${test}, type: ${typeof test}`);
  # value: false, type: boolean
  ```



- null

  > 텅텅 비어있는 empty값, 아무것도 아닌 것

  ```javascript
  let nothing = null;
  console.log(`value: ${nothing}, type: ${typeof nothing}`);
  ```



- undefined

  >선언은 되어있지만 아무런 값이 지정되지 않은 것

  ```javascript
  let x;
  console.log(`value: ${x}, type: ${typeof x}`);
  ```



- symbol

  >자료구조에서 고유한 식별자가 필요하거나, 동시에 다발적으로 concurrent하게 일어날 수 있는 코드에서 우선순위를 주고 싶을 때, 정말 고유한 식별자가 필요할 때 사용

  ```javascript
  const symbol1 = Symbol('id');
  const symbol2 = Symbol('id');
  console.log(symbol1 === symbol2);
  # false
  
  // 주어진 string에 맞게 symbol을 생성
  const gSymbol1 = Symbol.for('id');
  const gSymbol2 = Symbol.for('id');
  console.log(gSymbol1 === gSymbol2);
  # true
  
  // symbol을 그대로 출력하려하면 error가 발생하니 .description을 이용하여 string으로 변환하여 출력
  console.log(`value: ${symbol1}, type: ${typeof symbol1}`)
  # error
  console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
  # value: id, type: symbol
  ```



### Dynamic typing ( dynamically typed language )