// 1. Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment(); //1
counterOne.increment(); //2

const counterTwo = counterOne;
counterTwo.increment(); //3

console.log(counterOne.count);
//3
