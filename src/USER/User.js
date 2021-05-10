import moment from "moment";
import Validation from "./Validation";
class User {
  constructor(name, surname, dateOfBirth, password, sex, email) {
    Validation.isEmpty(name);
    Validation.isEmpty(surname);
    Validation.passwordValidation(password);
    Validation.sexValidation(sex);
    Validation.emailValidation(email)
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = moment(dateOfBirth, [
      "MM.DD.YYYY",
      "DD.MM.YYYY",
      "YYYY.MM.DD",
      "YYYY.DD.MM",
    ]).format("DD/MM/YYYY");
    this.password = password;
    this.sex = sex;
    this.email = email;
    this.role = "USER";
  }
  setPassword(newPas) {
    this.password = newPas;
  }
  setEmail(newEmail) {
    this.email = newEmail;
  }
}
export default User;
