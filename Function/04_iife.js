// IMMEDIATELY INVOKED FUNCTION EXPRESSION  (IIFE)

function chai() {
  console.log(`DB CONNECTED`);
}
chai();

// used iife    :- wraped in parathesid and exicute in parathesis
(function chai() {
  // thhis is name iife
  console.log(`db connected`);
})(chai);

// used  arrow function for IIFE
((name) => {
  console.log(`db connected ${name}`);
})("Raushan");
