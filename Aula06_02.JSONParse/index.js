const fs = require('fs/promises');

(async function () {
  const arquivoJson = await fs.readFile('teste.json')

  const pessoas = JSON.parse(arquivoJson)

  pessoas.push({
    nome: "Arthur",
    idade: 26
  })
  
  const arrayJson = JSON.stringify(pessoas)

  console.log(arrayJson)
})()

// #HOWTO# Como executar o código: 
// Apenas execute com node.js
