const express = require('express')
const rotas = require('./rotas')

const app = express()

app.use(express.json())

app.use(rotas)

app.listen(3000)

// #HOWTO# Como executar o código: 
// Acesse os as seguintes rotas pelo software Insomnia e utilize as respectivas palavras detalhadas: 
// http://localhost:3000/instrutores - get - lista instrutor
// http://localhost:3000/instrutores/1 - get - lista instrutor de id 1
// http://localhost:3000/instrutores - post - adiciona 1 instrutor - envie no body uma mensagem JSON do formato: { "nome": 'Arthur', "email": 'arthur@gmail.com', "status": true }
// http://localhost:3000/instrutores/1 - put - atualiza completamente o instrutor de id 1 - envie no body uma mensagem JSON do formato: { "nome": 'Arthur', "email": 'arthur@gmail.com', "status": true }
// http://localhost:3000/instrutores/1/status - patch - atualiza o status do instrutor de id 1 - envie no body uma mensagem JSON do formato: { "status": true }
// http://localhost:3000/instrutores/1 - delete - remove o instrutor de id 1
// http://localhost:3000/instrutores/1/aulas - post - adiciona 1 aula - envie no body uma mensagem JSON do formato {"titulo": "Português","descricao": "descrição aqui"}
// http://localhost:3000/aulas - get - lista todas as aulas
// http://localhost:3000/aulas/1 - get - lista aula de id 1
// http://localhost:3000/instrutores/1/aulas - get - lista todas as aulas do instrutor de id 1