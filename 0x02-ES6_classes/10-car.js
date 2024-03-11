export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = new Car(this._brand, this._motor, this._color);
    Object.getOwnPropertySymbols(this).forEach((symbol) => {
      Object.defineProperty(newCar, symbol, Object.getOwnPropertyDescriptor(this, symbol));
    });
    return newCar;
  }
}
