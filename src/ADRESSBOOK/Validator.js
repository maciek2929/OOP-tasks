import Contact from "./Contact";

class Validator{

static checkString(stringToCheck){
  const dataType = typeof  stringToCheck === 'string';
  const stringLength = stringToCheck.length === 0;
  const condition = (dataType || stringLength)
  if(!condition) throw new Error('value have to be type string, and do not  be empty')

}
static isProperlyCreatedElement(contactToCheck, type) {
  return contactToCheck instanceof type;
}

}

export default Validator