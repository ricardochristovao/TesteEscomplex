class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const alice = new Person("Alice", 30);
  alice.greet();
  
  const bob = new Person("Bob", 25);
  bob.greet();
  