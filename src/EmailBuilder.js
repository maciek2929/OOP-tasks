// Wykorzystując wzorzec projektowy Builder stwórz obiekt json reprezentujacy wszystkie parametry maila
// - FROM
// - TO
// - CC
// - BCC
// - TITLE
// - HTML


 export class EmailBuilder{
  constructor(from,to,{CC,BCC,title,Html}) {
    this.from = from;
    this.to = to
    this.CC = CC;
    this.BCC = BCC;
    this.title = title;
    this.Html = Html
  }
}

const email1 = new EmailBuilder('maciek@@@','Ewelina@@',{CC:'Wacek',BCC:'Placek',title:'Witaj',Html:'<div> email </div>>'})
console.log(email1)

// Webstorm rozwiazuje problem buildera, poprzez podpowiedzi przy konstruktorze//