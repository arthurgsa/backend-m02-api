//--// EXERCICIO RESOLVIDO 1 - LISTAGEM E FILTRAGEM DE CARROS
/////////////////////////////////////////////////////////////
const carros = require('../bancodedados')

const filtrarCarros = (req, res) => {
  // http://localhost:3000/carros?marca=fiat
  const { marca, cor } = req.query
  let resultado = carros.carros
  console.log('Cheguei no controlador de listagem de carros EDIT')

  ////// MARCA >> E << COR //
  if (marca) {
    resultado = resultado.filter((cadaCarro) => {
      return cadaCarro.marca === marca
    })
  }
  if (cor) {
    resultado = resultado.filter((cadaCarro) => {
      return cadaCarro.cor === cor
    })
  }
  
  ////// MARCA >> OU << COR //
  // if (marca || cor) {
  //   resultado = []
  //   resultado.push(...carros.carros.filter((cadaCarro) => {
  //     return cadaCarro.marca === marca || cadaCarro.cor === cor
  //   }))
  // }
  
  res.send(resultado)
}

const encontrarCarros = (req, res) => {
  console.log('rota pra encontrar um carro')
  const carroEncontrado = carros.carros.find((cadaCarro) => {
    return cadaCarro.id === Number(req.params.id)
  })
  res.send(carroEncontrado)
}

module.exports = {
  filtrarCarros,
  encontrarCarros
}
