class User {
  constructor(name, surname,dateOfBirth,password,gender,email){
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.gender = gender;
    this.email = email;
    this.accesLevel = 'USER'

  }
  setPassword(newPas){
    this.password = newPas

  }
  setEmail(newEmail){
    this.email = newEmail
  }
}
export default User