import is from "/home/maciek/Desktop/ZADANIAOOP/OOP-task-/node_modules/is_js/is.js";
class Validation {
  static emailValidation(email){
   const rfc22 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!rfc22.test(email)) throw  new Error(' mail is incorect')
  }
  static passwordValidation(password){
    const passCondition =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if(!passCondition.test(password)) throw new Error('Passswrod is incorect')
  }
  static sexValidation(sex){
    if(!['male','female'].includes(sex)) throw new Error('Password is incorec')
  }
  static isEmpty(value){
    if(value.length ===0) throw new Error('is Empty Value')
  }


}
export default Validation