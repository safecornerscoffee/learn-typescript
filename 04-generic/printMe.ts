const printMe = <T>(content: T): T => {
  console.log(content);
  return content;
}

const hello = printMe('Hello');

class Person {
  constructor(private name: string) {}
}

const emmaStone = printMe(new Person("Emma Stone"));

const emma = printMe<Person>(new Person("Emma Stone"));