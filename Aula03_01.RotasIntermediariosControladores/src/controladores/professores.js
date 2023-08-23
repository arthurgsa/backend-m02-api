const profs = require('../bancodedados')

// http://localhost:3000/professores/1
const encontrar1Prof = (req, res) => {
  console.log('rota pra encontrar um prof')
  const professorEncontrado = profs.profs.find((professor) => {
    return professor.id === Number(req.params.id)
  })
  res.send(professorEncontrado)
}
// http://localhost:3000/professores
const filtrarProfessores = (req, res) => {
  // http://localhost:3000/professores?stack=Frontend
  const { stack } = req.query
  let resultado = profs.profs

  console.log('Cheguei no controlador de listagem de profs.profs')

  if (stack) {
    resultado = profs.profs.filter((professor) => {
      return professor.stack === stack
    })
  }
  res.send(resultado)
}

module.exports = {
  filtrarProfessores,
  encontrar1Prof,
  home
}