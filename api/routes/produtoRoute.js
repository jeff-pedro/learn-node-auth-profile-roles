const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const roles = require('../middlewares/roles')
const permissoes = require('../middlewares/permissoes')
const validaPermissoes = require('../middlewares/validaPermissoes')

const router = Router()

router
    .post('/produto',roles(['Gerente']), ProdutoController.cadastrarProduto)
    .get('/produto', permissoes(['editar', 'listar']), ProdutoController.buscarTodosProdutos)
    .get('/produto/id/:id', validaPermissoes(['listar']), ProdutoController.buscarProdutoPorId)
    .delete('/produto/id/:id', ProdutoController.deletarProdutoPorId)
    .put('/produto/id/:id', ProdutoController.editarProduto)

module.exports = router