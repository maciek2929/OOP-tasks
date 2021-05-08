import { v4 as uuidv4 } from "uuid";
import HelperMethods from "./HelperMethods";
import Library from "./Libray";

class Booking {
  constructor(basicPenalties = 0.5) {
    this.id = uuidv4();
    this.loanDate = new Date();
    this.dueDate = HelperMethods.manipulateDays(this.loanDate, 7);
    this.basicPenalties = basicPenalties;
  }

  rentBook(bookName, whichLibraryYouCheck) {
    if (
      !HelperMethods.checkThatExist(bookName, whichLibraryYouCheck.allBookList)
    ) {
      throw new Error("This book is not avaible in list");
    } else {
      console.log('wchodzi')
      whichLibraryYouCheck.removeFromBookList(bookName);

      // whichLibraryYouCheck.addBookToList(
      //   whichLibraryYouCheck.rentedList,
      //   bookName
      // );

    }
  }
}

export default Booking;
