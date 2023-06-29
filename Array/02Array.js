const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);

const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

const another_array = [1, 2, 3, 4, [5, 6, 9], 5, 7, 1, [12, 15, 7, 62]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("raushan"));
// console.log(Array.from("raushan"));

let score = 100;
let score1 = 200;
let score2 = 300;
// console.log(Array.of(score, score1, score2));

const myArra = [1, 2, 3, 4, 5, 6];
const myArrb = [7, 8, 9, 6, 3, 5];
const myArrc = [...myArra, ...myArrb];
