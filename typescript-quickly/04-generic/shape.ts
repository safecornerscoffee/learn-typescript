interface Comparator<T> {
  compareTo(value: T): number
}

class Rectangle implements Comparator<Rectangle> {
  
  constructor(private width: number, private height: number) {}
  
  public area(): number {
    return this.width * this.height
  }

  compareTo(value: Rectangle): number {
      return this.area() - value.area()
  }
}

class Triagle implements Comparator<Triagle> {
  constructor(private base: number, private height: number) {}

  area(): number {
    return this.base * this.height / 2
  }
  
  compareTo(value: Triagle): number {
    return this.area() - value.area()
  }
}