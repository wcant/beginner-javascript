sayHi();

function sayHi() {
    console.log('hi');
}

function outer() {
    const outerVar = "hey i'm the outer var";
    return function inner() {
      const innerVar = "hey i'm the inner var";
      console.log(innerVar);
      console.log(outerVar);
    }
}

const innerFn = outer();

innerFn();
