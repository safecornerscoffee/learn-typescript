class Fish {
  constructor(readonly name: string) {

  }

  dive(howDeep: number): string {
    return `Dive into ${howDeep} feet`
  }
}