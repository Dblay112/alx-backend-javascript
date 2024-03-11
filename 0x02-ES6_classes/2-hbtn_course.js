export default class HolbertonCourse {
  constructor(name, length, students) {
    // Enforce type validation constraints using `instanceof` for clarity
    if (!(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    if (!(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || students.some((student) => !(student instanceof String))) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (!(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (!(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || students.some((student) => !(student instanceof String))) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
