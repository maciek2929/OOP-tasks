import { v4 as uuidv4 } from "uuid";
import HelperMethods from "./HelperMethods";
import Library from "./Libray";

class Booking {
  constructor(basicPenalties = 0.5) {
    this.id = uuidv4();
    this.loanDate = new Date();
    this.dueDate = HelperMethods.manipulateDays(this.loanDate, 7);
    this.basicPenalties = basicPenalties;
    console.log('due date',this.dueDate);
    console.log('loan Date',this.loanDate)


  }
  addToList(bookName, user){
    user.allBookList.push(bookName)

  }

}

export default Booking;
