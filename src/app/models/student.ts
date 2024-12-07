export class Student {
    // Using public access modifiers in the constructor for simplicity
    constructor(private name: string, private age: number) {}
  
    // Getter for name
    getName(): string {
      return this.name;
    }
  
    // Setter for name
    setName(name: string): void {
      this.name = name;
    }
  
    // Getter for age
    getAge(): number {
      return this.age;
    }
  
    // Setter for age
    setAge(age: number): void {
      this.age = age;
    }
  }
  
  