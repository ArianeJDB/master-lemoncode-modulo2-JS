// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Uliza rest / spread operators.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const array2 = ["uno", "dos", "tres", "cuatro", "cinco", "seis"]
const array3 = ["h0la", "chao"]
const array4 = [23, 234, 234, 531]
const concat = (a, b) => {
  const newArray = [...a, ...b]
  console.log(newArray)
  return newArray;

};

concat(array1, array2)

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múlples arrays de
// entrada (más de 2).

const concatMultiple = (...args) => {
  const newArray = [].concat(...args)
  console.log(newArray)
  return newArray
};

concatMultiple(array1, array2, array3, array4)
