class HelperMethods{
 static  checkThatExist(book, list) {
    const result = list.filter((element) => element.id === book.id);
    return !!result.length;
  }

  static manipulateDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  static calculateRentingTime(whereWeStartTLoan) {
    const startLoan = whereWeStartTLoan.getTime();
    const endLoan = new Date().getTime();
    const rentingTime = endLoan - startLoan;
    return Math.ceil((rentingTime / 1000) * 60 * 60 * 24);
  }

}
export default HelperMethods