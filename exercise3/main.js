// Implementa una función clone que, a parr de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source :
const source = {
  name: "Ari",
  age: 34
}

const target = {
  name: "Sebas",
  age: 11,
  country: 'Spain'

}

function clone(source) {
  const properties = Object.keys({ ...source })
  console.log(properties)
  return properties
}

clone(source)

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target ,
// devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
// de propiedades con el mismo nombre, source sobreescribe a target .

function merge(source, target) {
  const newObj = {...target, ...source}
  console.log('00', newObj)
}

merge(source, target)