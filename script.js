let ticketPriceForAge = 12;

if (ticketPriceForAge < 12) {
  console.log("Chield ticket: $5");
} else if (ticketPriceForAge >= 12 && ticketPriceForAge <= 18) {
  console.log("Teen ticket: $7");
} else if (ticketPriceForAge >= 18 && ticketPriceForAge <= 60) {
  console.log("Senior ticket: $10");
} else {
  console.log("Adult ticket: $12");
}
