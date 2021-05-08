import {v4 as uuidv4 } from 'uuid'
//@ToDo add api functionality for this component//
class Book {
  constructor(title,author) {
    this.title = title;
    this.author = author;
    this.id = uuidv4();
    this.photo = 'random photo downloaded from api ';
    this.description = 'random description downloaded from api'
  }
}

export default Book