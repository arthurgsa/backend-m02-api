const fs = require('fs')
const fsPromises = require('fs/promises')

console.log('antes de ler'); // necessario ; antes de funçao anonima


// const algo = fsPromises.readFile('a.txt')

// algo.then ((data) => {
//   console.log(data.toString())
// })

// algo.catch ((erro) => {
//   console.log(erro)
// })

// fs.readFile('a.txt', (erro, data) => {
//   if (erro) {
//     console.log(erro)
//   } else {
//     console.log(data.toString())
//   }
// })

(async function () {
  const a = await fsPromises.readFile('a.txt')
  
  console.log(a.toString())
})()

console.log('depois de ler')

// #HOWTO# Como executar o código: 
// Apenas descomente o que deseja testar e execute com node.js