## **Interviews**

### **General (1 min)**
* linux
* docker
* git
* IDE's
* Agile / SCRUM


### **Markup**
* центрование ([Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/))
* блочный / строчный элемент
* позиционирование (relative / fixed / absolute / sticky / **static**) и `z-index`
* работал ли напрямую с DOM
* event bubbling, 3 phases
  * capturing phase - the event goes down to the element.
  * target phase - the event reached the target element.
  * bubbling phase - the event bubbles up from the element.
* event target: `Event.target` / `Event.currentTarget`


### **JavaScript**
* типы данных
* базовые типы JS / примитивы (undefined, boolean, number, string, bigint, symbol)
* виды `object` в JS (Object, Array, (Weak)Map, (Weak)Set, Date)
* хоистинг ([Explain "hoisting"](https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/en/javascript-questions.md#explain-hoisting))
* event loop (main / async) ([Event loop and the rise of Async programming](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5))
* как проверить является ли значение переменной массивом (`instanceof Array` / `typeof [] && Array.isArray([])`)
* разница между `String(myVarriable)` и `myVarriable.toString()`
* разница между **.call** и **.apply** ([What's the difference between .call and .apply?](https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/en/javascript-questions.md#whats-the-difference-between-call-and-apply))
* что такое **this** (объект по левую слону точки по сути), куда указывает если не находится в скоупе объекта / не указан контекст (`Function.prototype.bind(...)`)
  ```javascript
  function getThis() { console.log(this); };
  getThis(); // window
  getThis = getThis.bind({'foo':'bar'});
  getThis(); // {'foo':'bar'}
  ```
  ```javascript
  const ctx = {
    name: "foo",
    getName() {
      return this.name;
    }
  };
  const getName = ctx.getName;

  // console.log(ctx.getName());
  // console.log(getName());
  // console.log(getName.bind(ctx)());
  // console.log(ctx.getName.bind({ name: "bar" })());
  ```
* Fibonacci numbers:
  ```javascript
  // idx: 0,1,2,3,4,5,6,...
  // res: 0,1,1,2,3,5,8,...
  // fib(n) = fib(n-1) + fib(n-2)

  function fib(idx) {
    if (idx < 2) return idx;
    let prev_m1 = 1;
    let prev_m2 = 0;
    let result = 0;
    for (let i = 2; i <= idx; i++) {
      result = prev_m1 + prev_m2;
      prev_m2 = prev_m1;
      prev_m1 = result;
    }
    return result;
  }

  function fib(idx) {
    if (idx === 0) return 0;
    if (idx <= 2) return 1;
    return fib(idx - 1) + fib(idx - 2);
  }

  const fibMemo = (function () {
    let cache = {};

    function fibMemoInner(idx) {
      if (idx in cache) {
        return cache[idx];
      } else {
        if (idx === 0) return (cache[idx] = 0);
        if (idx <= 2) return (cache[idx] = 1);
        return (cache[idx] = fibMemoInner(idx - 1) + fibMemoInner(idx - 2));
      }
    }

    return fibMemoInner;
  })();

  console.log(fib(0), fib(1), fib(3), fib(6));
  console.log(fibMemo(0), fibMemo(1), fibMemo(3), fibMemo(6));
  ```
* OOP in JS, классы, наследование
  ```javascript
  var Employee = {
    company: 'google'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company); // google
  ```
* `Promise` / `callback hell`
  * fulfilled
  * rejected
  * pending
* современные фитчи языка ([JavaScript brief history and ECMAScript(ES6,ES7,ES8,ES9) features](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4))
  * async / await
  * arrow functions (do they have `this`?)
  * modules (AMD, CommonJS)
  * generators (что оно такое и для чего используются)
  * iterators / `for..of` (тот же генератор живущий в Symbol.iterator объекта)
  * nullish coalescing operator (`??` / `??=`)
  * optional chaining operator (`?.` / `?.()`)
* webpack / babel / other tools


### **React**
* как работает реакт
* какие типы компонентов бывают (stateless / statefull / функциональные / классы / HOC)
* lifecycles (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
* жизненный цикл компонента
* hooks
* `this.setState(...)` / `useState(...)`
* разница `useCallback(...)` / `useMemo(...)` / `React.memo(...)`
* либы с которыми работал


### **SQL**
* что такое HAVING?
* что такое JOIN? их виды
* можно ли объеденить таблицы не используя JOIN?


### **Arch**
* REST, CRUD methods
* idempotent methods


### **Notes**
важно понять его заинтересованность в работе и развитии. так как если мы найдем чувака который знает может и не много, но просто капец читает про все новое, хоть и не сильно знает старое, и вообще ему это все дико интересно — это наш кандидат


### **Extra**
[Advanced JavaScript Interview Questions](https://codersera.com/blog/advanced-javascript-interview-questions/)


инвестиционный фонд
тима 12 человек
джава - импорт данных
питон + фласк - АПИ
фронт - уи для анализа ошибок импорта, разрешения конфликтов

реакт
SQL - sybase / oracle / mssql
самостоятельный, будет один

#### Mandatory Skills
  * Experience with UI/UX development,
  * JavaScript,
  * React,
  * HTML, CSS,
  * Relational databases, SQL

#### Nice to have skills
  * Python,
  * Experience in building scalable systems,
  * Experience with CI/CD and tests,
  * NoSQL databases,
  * Docker and cloud concepts,
  * AWS/GCP.