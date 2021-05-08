import {v4 as uuidv4 } from 'uuid'
class CartItem{
  constructor(name,category,price,quantity=0) {
    this.id = uuidv4();
    this.name = name;
    this.category = category;
    this.price = price;
    this.quanity = quantity
  }
  setPrice(newPrice){
    this.price = newPrice;
  }
  setQuantity(addQuantity){
    this.quanity = addQuantity;
  }
  setName(newName){
    this.name = newName;
  }
  showProduct(){
    return (`
     produkt : ${this.name}
     kategoria ${this.category}
     cena regularna ${this.price}
     obowiazujaca znizka ${this.quanity}`
    )
  }
}

export default CartItem