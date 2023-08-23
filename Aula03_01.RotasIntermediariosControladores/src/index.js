const express = require('express') //// importa express
const { filtrarProfessores, encontrar1Prof } = require('./controladores/professores') //// importa controladores de profs
const { interRota } = require('./controladores/intermediarios')

const app = express() 

//// GETs
// http://localhost:3000/professores
app.get('/professores', interRota, filtrarProfessores) //intermediario de rota

// http://localhost:3000/professores/1
app.get('/professores/:id', encontrar1Prof)

//// PORT
app.listen(3000)

// #HOWTO# Como executar o código: 
// Acesse os as seguintes rotas: 
// http://localhost:3000/professores - lista professores
// http://localhost:3000/professor/1 - mostra 1 professor específico
