const express = require('express')
const { listarProdutos, vendas } = require('./controladores/vendas')

const app = express()

app.use(express.json())

app.get('/produtos', listarProdutos)
app.post('/produtos', vendas)

app.listen(3000)

// #HOWTO# Como executar o código: 
// Acesse os as seguintes rotas pelo software Insomnia e utilize as respectivas palavras detalhadas: 
// http://localhost:3000/produtos - get - imprime no client todos os produtos
// http://localhost:3000/produtos - post - cadastra uma venda no arquivo '/bancodedados/vendas.json', caso o arquivo nao existe, é criado. - envie no body uma mensagem JSON do formato: { "produto_id": 8, "quantidade": 5 }