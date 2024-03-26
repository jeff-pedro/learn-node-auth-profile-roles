const { Router } = require('express')
const RoleController = require('../controllers/roleController')

const router = Router()

router
    .post('/roles', RoleController.cadastrar)
    .get('/roles', RoleController.buscarTodos)
    .get('/roles/id/:id', RoleController.buscarPorId)
    .put('/roles/id/:id', RoleController.atualizar)
    .delete('/roles/id/:id', RoleController.deletar)

module.exports = router

