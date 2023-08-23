const express = require('express')
const { getCityFromZipcode, getStateFromZipcode, getPackageDescriptionNpm } = require('utils-playground')
const app = express()

app.get('/', async (req, res) => {
  const cidade = getCityFromZipcode('50740270')
  const estado = getStateFromZipcode('50740270')

 const promise = await Promise.all([cidade, estado])

  const [resCidade, resEstado] = promise
  res.send(`Cidade: ${resCidade}. Estado: ${resEstado}.`)
})

app.get('/pacote/:nomePacote', async (req, res) => {
  const { nomePacote } = req.params
  const descrPacotNPM = await getPackageDescriptionNpm(nomePacote)

  res.json(`Descrição: ${descrPacotNPM}`)
})

app.listen(3000)

// #HOWTO# Como executar o código: 
// Acesse os as seguintes rotas pelo software Insomnia e utilize as respectivas palavras detalhadas: 
// http://localhost:3000/ - get - mostra cidade e estado de acordo com cep inserido no código
// http://localhost:3000/pacote/express - get - imprime no client a descrição do pacote node digitado