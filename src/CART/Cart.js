class Cart {
  constructor(basket, basketDiscount = 0, promotionalCode = 0) {
    this.id = uuidv4();
    this.basket = [];
    this.basketDiscount = basketDiscount;
    this.promotionalCode = promotionalCode;
  }
  addItems(...items) {
    items.forEach((item) => {
      this.basket.push(item);
    });
  }
  removeItem(itemToRemove){
    this.basket = this.basket.filter(item=> {
      return item.name === !itemToRemove
    })

  }

  calculateBasket(){
    const totalDiscount = this.basketDiscount + this.promotionalCode
    const arrayToCalculate = [];
     this.basket.forEach(item=> {
      arrayToCalculate.push(item.price)
    })
    const result = arrayToCalculate.reduce((accumulator,curentElement)=> {
      accumulator+= curentElement
    })
    return result * totalDiscount /100


  }
}
