type Person = {
  address: string
}

const isPerson = (object:any): object is Person => "address" in object

let person1: any;

person1 = JSON.parse('{"adress": "25 Broadway"}')

console.log(person1.address) //should be unknown

let person2: unknown

person2 = JSON.parse('{"address": "25 Broadway"}')

console.log(person2.address)


