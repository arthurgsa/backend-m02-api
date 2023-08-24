/////////////////////////////////// padrão
// const lodash = require('lodash')

// const array = [1,2,4,4,6,7,1,2,3]

// const arrayUnico = lodash.uniq(array)

// console.log(arrayUnico)

/////////////////////////////////// desestruturação
// const { uniq } = require('lodash')

// const array = [1,2,4,4,6,7,1,2,3]

// const arrayUnico = uniq(array)

// console.log(arrayUnico)

/////////////////////////////////// importar arquivos
// const { uniq } = require('lodash')
// const array = require('./array')

// console.log(array)

// const arrayUnico1 = uniq(array.arrayLetras)
// const arrayUnico2 = uniq(array.arrayNumeros)

// console.log(arrayUnico1)
// console.log(arrayUnico2)

/////////////////////////////////// importar arquivos
const { uniq } = require('lodash')
const { arrayNumeros, arrayLetras } = require('./array')

console.log(arrayNumeros)
console.log(arrayLetras)

const arrayUnico1 = uniq(arrayLetras)
const arrayUnico2 = uniq(arrayNumeros)

console.log(arrayUnico1)
console.log(arrayUnico2)

// #HOWTO# Como executar o código: 
// Apenas descomente o que deseja testar e execute com node.js