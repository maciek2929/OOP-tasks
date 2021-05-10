import User from "./User";
import Validation from "./Validation";

class SuperUser extends User {
  constructor(name,surname,dateOfBirth,password,sex,email) {
    super(name,surname,dateOfBirth,password,sex,email);
    this.role = 'ADMIN'
  }
  changeRole(newRole){
    this.role =newRole;
  }
  setAdminPassword(newPassword){
    if (Validation.passwordValidation(newPassword)){
      this.password = newPassword
    }
  }
}
export default SuperUser