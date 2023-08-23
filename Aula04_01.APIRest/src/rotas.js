const express = require('express')
const instrutores = require('./controladores/instrutores')
const aulas = require('./controladores/aulas')

const rotas = express()

rotas.get('/instrutores', instrutores.listarInstrutores)
rotas.get('/instrutores/:id', instrutores.acharInstrutor)
rotas.post('/instrutores', instrutores.adicionarInstrutor)
rotas.put('/instrutores/:id', instrutores.editarInstrutor)
rotas.patch('/instrutores/:id/status', instrutores.alterarInstrutor)
rotas.delete('/instrutores/:id', instrutores.deletarInstrutor)
rotas.post('/instrutores/:id/aulas', aulas.cadastrarAula)
rotas.get('/aulas', aulas.verAulas)
rotas.get('/aulas/:id', aulas.acharAula)
rotas.get('/instrutores/:id/aulas', aulas.acharAulaInstrutor)

module.exports = rotas