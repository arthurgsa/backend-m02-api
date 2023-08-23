let { instrutores, idInstrutor } = require ('../bancodedados')

//// Controlador 1
const listarInstrutores = (req, res) => {
  return res.json(instrutores)
}

//// Controlador 2
const acharInstrutor = (req, res) => {
  const instrutor = instrutores.find(cada => cada.id === Number(req.params.id))

  if (!instrutor) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado.'})
  }

  return res.json(instrutor)
}

//// Controlador 3
const adicionarInstrutor = (req, res) => {
  const { nome, email, status } = req.body
  
  if (!nome) {
    return res.status(404).json( { mensagem: 'O nome é obrigatório.' })
  }

  if (!email) {
    return res.status(404).json( { mensagem: 'O email é obrigatório.' })
  }

 const instrutor = {
  id: idInstrutor++,
  nome: nome,
  email: email,
  status: status ?? true
}

instrutores.push(instrutor)

return res.status(201).json(instrutor)
}

//// Controlador 4
const editarInstrutor = (req, res) => {
  const { nome, email, status } = req.body
  
  if (!nome) {
    return res.status(404).json( { mensagem: 'O nome é obrigatório.' })
  }

  if (!email) {
    return res.status(404).json( { mensagem: 'O email é obrigatório.' })
  }

  const instrutor = instrutores.find(cada => cada.id === Number(req.params.id))

  if (!instrutor) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado.'})
  }

  instrutor.nome = nome
  instrutor.email = email
  instrutor.status = status ?? true

  return res.status(204).send()
}

//// Controlador 5
const alterarInstrutor = (req, res) => {
  const { status } = req.body
  const instrutor = instrutores.find(cada => cada.id === Number(req.params.id))

  if (!instrutor) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado.'})
  }

  instrutor.status = status ?? true

  return res.status(204).send()
}

//// Controlador 6
const deletarInstrutor = (req, res) => {
  const instrutor = instrutores.find(cada => cada.id === Number(req.params.id))
  
  if (!instrutor) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado.'})
  }

  instrutores = instrutores.filter(cada => cada.id !== Number(req.params.id))

  return res.status(204).send()

}

module.exports = {
  listarInstrutores,
  acharInstrutor,
  adicionarInstrutor,
  editarInstrutor,
  alterarInstrutor,
  deletarInstrutor
}