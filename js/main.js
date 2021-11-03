var ticketCost = 500*9433.34;
var hotelCost = 250*9433.34;
var funCost = 120*10354.03;
console.log( typeof ticketCost);
var allCost = ticketCost + hotelCost + funCost;
var text1 = window.document.querySelector(".text1");
var text2 = window.document.querySelector(".text2");

var usermoney = Number(prompt( "How much money do you have?"));
 if( usermoney>=allCost){
     console.log(text1);
 }
 else{
     console.log(text2);
 }
