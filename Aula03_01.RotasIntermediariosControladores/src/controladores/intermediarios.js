const interRota = (req, res, next) => {
  console.log('Passei intermediário da rota')
  next()
}

//--// EXERCICIO RESOLVIDO 1 - LISTAGEM E FILTRAGEM DE CARROS
/////////////////////////////////////////////////////////////
const interSenha = (req, res, next) => {
  const { senha } = req.query
  if (senha === 'carros123') {
    next()
  } else {
    return res.send('A senha não foi informada ou está incorreta!')
  }
}

module.exports = {
  interSenha,
  interRota
}