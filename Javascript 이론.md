# Javascript 이론

공식사이트: ecma-international.org

참고사이트: developer.mozilla.org



- 출력

```javascript
console.log('Hello World!');
```



- 실행 (node.js 설치 시)

```bash
node `File Name`
```



- API (Application Programming Interface)

> 브라우저가 제공하는, 브라우저가 이해하는 함수

참고: https://developer.mozilla.org/ko/docs/Web/API/Console_API



#### developer tool (at chrome)

- open 

```markdown
- window: Ctrl + Shift + i
- mac: Cmd + Option + i
```



- Elements
  - html에서 작성한 요소들을 확인하고 검사
- Console
  - 코드에서 작성한 메세지 확인
  - javascript를 활용하여 동적으로 요소들을 검사하고 수정
- Sources
  - break point를 활용하여 디버깅
- Network
  - 네트워크가 어떻게 발생하는지 얼마나 많은 데이터가 오가는지 확인



### async vs defer

#### 페이지가 사용자에게 보여지는 순서

1. script 코드가 head안에 담겼을 때

   > code를 읽는 도중 script 코드 발견하면 읽기를 중단하고 script코드 fetching과 executing 이후에 다시 실행

   1. parsing HTML
      - 브라우저가 코드를 한줄씩 분석하여 css와 병합하여 DOM요소로 변환 
   2. blocked
      1. fetching js
      2. executing js
   3. parsing HTML
      - __page is ready__

   

2. script 코드가 body 제일 마지막에 담겼을 때

   > body의 제일 밑부분에 script 코드가 존재하므로 페이지를 불러온 이후에 fetching과 executing 실행
   >
   > 단점으로 이 페이지가 script에 많이 의존하는 페이지라면 executing이 되기 전까지는 완성페이지가 아님

   1. parsing HTML
      - __page is ready__
   2. fetching js
   3. executing js

   

__※ script코드를 만나게되면 코드 분석을 중단하고 script 파일을 다운로드__



3. script 코드가 head 안에 async 를 통해 달렸을 때

   > code를 읽는 도중 script 코드를 만나면 병렬적으로 코드 read와 script fetching을 실시하며 fetching이 완료된 시점에 read를 중단하고 executing이 일어남
   >
   > 단점으로는 body부분에 script를 통해 불러올 데이터를 이용하게 된다면 참조 오류가 일어날 수 있음

   - ex

   ```javscript
   <script asyn src="main.js"></script>
   ```

   1. parsing HTML

      1-1. fetching js

   2. blocked (feching 완료시)

      1. executing js 

   3. parsing HTML

      - __page is ready__



4. script 코드가 head 안에 defer 를 통해 달렸을 때

   > HTML 페이지를 parsing 하는 도중에 fetching js 가 일어나며 parsing이 완료되면 사용자에게 페이지를 보여주고 javascript 코드가 실행
   >
   > __최고의 선택지__

   1. parsing HTML

      1-1. fetching js

      - __page is ready__

   2. executing js



- head + async ( 다수 )
  - javascript 코드의 호출 순서와 상관없이 fetching이 먼저 되는 순서대로 executing 이 일어남
- head + defer ( 다수 )
  - HTML이 parsing되는 동안 javascript를 다운받아 놓은 다음에 호출의 순서대로 executing



```markdown
javascript 사용시 제일 윗줄에 `'use strict';`를 사용해 주는것이 좋다!
순수 vanilla script를 사용할땐 
선언되지 않은 변수에 값을 할당한다던지 기존에 존재하는 prototype을 변경하는 비상식적인 행동을 할때 막아준다.
```

