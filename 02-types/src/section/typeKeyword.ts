type Foot = number;
type Pound = number;
type Name = string;

type Patient = {
  name: Name;
  height: Foot;
  weight: Pound;
}

let patient: Patient = {
  name: "Emma Stone",
  height: 4,
  weight: 100
}

type ValidatorFn = (c: FormControl) => {[key: string]: any } | null

class FormControl {
  constructor (initialValue: string, validator: ValidatorFn | null) {
    
  }
}