// class definition
export default class Recipe {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }

  isLowCaloric() {
    return "Low calorie? - " + (this.calories <= 400);
  }

  isHighCaloric() {
    return "High calorie? - " + (this.calories >= 600);
  }
}
