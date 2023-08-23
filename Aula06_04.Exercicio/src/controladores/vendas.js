const produtos = require('../bancodedados/produtos')
const fs = require('fs/promises')

const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos)
}

const vendas = async (req, res) => {
    const { produto_id, quantidade } = req.body

    const produtoEncontrado = produtos.find(produto => produto.id === Number(produto_id))

    if (!produtoEncontrado) {
        return res.status(404).json({message: 'O produto não foi encontrado.'})
    }

    try {
      let vendas = {}

      try {
        vendas = await fs.readFile('./src/bancodedados/vendas.json')
      } catch {
        const newFile = '{ "vendas": [] }'
        await fs.writeFile('./src/bancodedados/vendas.json', newFile)
        vendas = await fs.readFile('./src/bancodedados/vendas.json')
      }

      const parseVendas = JSON.parse(vendas)
      
      parseVendas.vendas.push({
          produto: produtoEncontrado,
          quantidade
      })

      await fs.writeFile('./src/bancodedados/vendas.json', JSON.stringify(parseVendas))

      return res.status(201).json({message: 'Vendas registrada com sucesso.'})
    } catch (erro) {
      return res.status(500).json({message: 'Erro do servidor'})
    }
}

module.exports = {
    listarProdutos,
    vendas
}