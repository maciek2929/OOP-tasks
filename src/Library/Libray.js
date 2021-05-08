import HelperMethods from "./HelperMethods";
class Library {
  constructor(allBookList, rentedList) {
    this.allBookList = [];
    this.rentedList = [];
  }
  addBookToList(list, ...books) {
    books.forEach((book) => {
      list.push(book);
    });
  }
  removeFromBookList(bookToRemove) {
    this.bookList = this.bookList.filter((book) => bookToRemove.id !== book.id);
  }
  removeFromRentedList(bookToRemove) {
    this.rentedBooks = this.rentedBooks.filter(
      (book) => bookToRemove.id !== book.id
    );
  }
  rentBook(bookName) {
    if (!HelperMethods.checkThatExist(bookName, this.bookList)) {
      throw new Error("Sorry we have not got this book yet");
    } else {
      this.bookList.removeFromBookList(bookName);
      this.rentedList.addBookToList(this.rentedList, bookName);
      console.log(" renting complete");
    }
  }
  returnBook(returnedBook){
    if(!HelperMethods.checkThatExist(returnedBook,this.rentedList)){
      throw new Error('Sorry it is not our book')
    } else {
      this.rentedList.removeFromBookList(returnedBook);
      this.addBookToList(this.allBookList,returnedBook);
      console.log('Returned successful , ')
    }
  }
}
export default Library;
