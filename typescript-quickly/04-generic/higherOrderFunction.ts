const outerFunc = (someValue: number) => 
 (multiplier: number) => someValue * multiplier;

const innerFunc = outerFunc(10);

let result = innerFunc(3);

console.log(result);

type numFunc<T> = (arg: T) => (c: number) => number;

const noArgFunc: numFunc<void> = () => (c: number) => c + 5;

const numArgFunc: numFunc<number> = (someValue: number) => 
  (multiplier: number) => someValue * multiplier;

const stringArgFunc: numFunc<String> = (someText: string) =>
  (padding: number) => someText.length + padding;

const createSumString: numFunc<number> = () => (x: number) => 'Hello';


