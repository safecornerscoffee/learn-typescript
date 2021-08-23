class Person {

  constructor(
  public firstName: string,
  public lastname: string,
  private age: number
  ) {}
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, age: number,
    public department: string ) {
      super(firstName, lastName, age)
    }
}

const empl = new Employee("Emma", "Stone", 32, 'Accounting')