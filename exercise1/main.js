// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Uliza destructuring.
const array = ["hola", 2, 3, 4, 5]

const head = ([first, ...rest]) => {
  console.log(first)
  return first
};
head(array)

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Uliza rest operator.
const tail = ([first, ...rest]) => {
  console.log(rest)
  return rest
};

tail(array)

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el úlmo. Uliza los métodos que ofrece
// Array.prototype.


const init = ([...arr]) => {
  arr.pop()
  console.log(array)
  return arr;

};

init(array)

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el úlmo elemento.
const last = ([...array]) => {
  console.log(array[array.length - 1]);
  return array[array.length - 1];

};

last(array)