
import Booking from "./LIBRARY/Booking";
import Book from "./LIBRARY/Book";
import Libray from "./LIBRARY/Libray";

const oldMan = new Book('Stary Czlowiek i moze', 'Henryk Sienkiewicz');
const quovadis = new Book('Quo Vadis','ernest Hemingway')
const magia = new Book('Mavia','Ania frania');
const podrecznik = new Book('Podrecznik Samoobrony','Ja')

const testBook = new Book('TestBook','TestAuthor');

const smallLibrary = new Libray()
smallLibrary.addBookToList(smallLibrary.allBookList,oldMan)
const maciej = new Booking()
console.log('Instance Of Booking :',maciej);
console.log('Instance Of LIBRARY',smallLibrary)

maciej.rentBook(oldMan,smallLibrary)





