const express = require('express') //// importa express
const { filtrarCarros, encontrarCarros } = require('./controladores/carros') //// importa controladores de carros
const { interSenha } = require('./controladores/intermediarios')

const app = express() 

//// intermediarios
app.use(interSenha) // intermediario global

//// GETs
// http://localhost:3000/carros
app.get('/carros', filtrarCarros)

// http://localhost:3000/carros/1
app.get('/carros/:id', encontrarCarros)

//// PORT
app.listen(3000)

// #HOWTO# Como executar o código: 
// (utilize sempre ao final "?senha=carros123" para validar seu acesso)
// Acesse os as seguintes rotas: 
// http://localhost:3000/professores?senha=carros123 - lista carros
// http://localhost:3000/professor/1?senha=carros123 - mostra carro de id 1