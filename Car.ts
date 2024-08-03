// Car.ts
import { Vehicle } from './Vehicle';


//Car Class: The Car class implements the Vehicle interface, providing the actual implementation for the make, model, and year properties, and the start method. The start method logs "Car engine started" to the console.

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.start(); // This should log "Car engine started" to the console
//Instance Creation: An instance of the Car class is created with make as 'Toyota', model as 'Corolla', and year as 2020. The start method is called on this instance to verify the implementation.