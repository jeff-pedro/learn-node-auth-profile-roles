const { Router } = require('express')
const PermissaoController = require('../controllers/permissaoController')

const router = Router()

router
    .post('/permissao', PermissaoController.cadastrar)
    .get('/permissao', PermissaoController.buscarTodos)
    .get('/permissao/id/:id', PermissaoController.buscarPorId)
    .put('/permissao/id/:id', PermissaoController.atualizar)
    .delete('/permissao/id/:id', PermissaoController.deletar)

module.exports = router
