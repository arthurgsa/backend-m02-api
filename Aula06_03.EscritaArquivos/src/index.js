const express = require('express')
const fs = require('fs/promises')

const app = express()

app.use (express.json())

app.get('/', async (req, res) => {
  const texto = 'Olá DEV'

  await fs.writeFile('src/a.txt', texto)
  res.json('ok')
})

app.post('/', async (req, res) => {
  const { nome, idade } = req.body

  try {

    const arquivoLido = await fs.readFile('src/usuarios.json')

  const pessoas = JSON.parse(arquivoLido)
  pessoas.push({ nome, idade })
    const arrayJson = JSON.stringify(pessoas)
    await fs.writeFile('src/usuarios.json', arrayJson)

  return res.json('Pessoa cadastrada com sucesso!')

  } catch (erro) {

    return res.json(`Deu erro: ${erro.message}`)
  
  } finally {

    console.log("Sempre serei executado. Bloco finalizado.")
    
  }
})

app.listen(3000)

// #HOWTO# Como executar o código: 
// Acesse os as seguintes rotas pelo software Insomnia e utilize as respectivas palavras detalhadas: 
// http://localhost:3000/ - get - escreve a variável 'texto' no arquivo 'a.txt' e envia "ok" para o client
// http://localhost:3000/ - post - cadastra um usuario no arquivo 'usuarios.json' - envie no body uma mensagem JSON do formato: { "nome": "Maria", "idade": 25 }