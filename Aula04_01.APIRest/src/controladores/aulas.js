let { instrutores, idAulas, aulas } = require ('../bancodedados')

//// Controlador 7
const cadastrarAula = (req, res) => {
  const { titulo, descricao } = req.body

  if (!titulo) {
    return res.status(404).json( { mensagem: 'É obrigatório inserir título e descrição.' })
  }

  if (!descricao) {
    return res.status(404).json( { mensagem: 'É obrigatório inserir título e descrição.' })
  }

  const instrutor = instrutores.find(cada => cada.id === Number(req.params.id))
  
  if (!instrutor) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado.'})
  }

  const aula = {
    idAulasGeral: idAulas++,
    titulo: titulo,
    descricao: descricao,
    idAulaDoProfessor: instrutor.idAula++,
    professor: instrutor,
  }

  aulas.push(aula)

  return res.json({ mensagem: `Aula '${aula.titulo}' adicionada com sucesso!` })
}

//// Controlador 8
const verAulas = (req, res) => {
  return res.status(200).json(aulas)
}

//// Controlador 9
const acharAula = (req, res) => {
  const aula = aulas.find(cada => cada.idAulasGeral === Number(req.params.id))

  if (!aula) {
    return res.status(404).json({ mensagem: 'Aula não encontrada.'})
  }

  return res.json(aula)
}

const acharAulaInstrutor = (req, res) => {
  const aulasAchadas = aulas.find(cada => cada.professor.id === Number(req.params.id))

  if (!aulasAchadas) {
    return res.status(404).json({ mensagem: 'Aulas não encontradas.'})
  }

  return res.json(aulasAchadas)
}

module.exports = {
  cadastrarAula,
  verAulas,
  acharAula,
  acharAulaInstrutor
}