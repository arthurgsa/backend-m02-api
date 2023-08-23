const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Aqui é a página principal')
})

app.get('/home', (req, res) => {
  res.send('Olá.. esse é meu primeiro servidtttttttttttor com express')
})

app.get('/array', (req, res) => {
  const arrayN = [1,2,3,4,5]
  res.send(arrayN)
})

// exercicio resolvido
app.get('/usuarios', (req, res) => {
  const lista = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 }
]
  res.send(lista)
})


app.listen(3000)

// #HOWTO# Como executar o código: 
// Acesse os as seguintes rotas: 
// http://localhost:3000/ - página principal
// http://localhost:3000/home - página recurso
// http://localhost:3000/array - página imprimindo array
// http://localhost:3000/usuarios - página que imprime lista de usuarios