import { v4 as uuidv4 } from "uuid";

class Contact {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.createdData = new Date();
    this.id = uuidv4();
  }
  setCreatedData() {
    this.createdData = new Date();
  }
  setChosenProperty(chosenProperty, newValue) {
    if (!["name", "surname", "email"].includes(chosenProperty)) {
      throw new Error(
        `${chosenProperty} is wrong value to set, please type corect property`
      );
    }
    this[chosenProperty] = newValue;
  }
}

export default  Contact