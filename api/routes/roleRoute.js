const { Router } = require('express')
const RoleController = require('../controllers/roleController')

const router = Router()

router
    .post('/roles', RoleController.cadastrar)
    .get('/roles', RoleController.buscarTodos)
    .get('/roles/id/:id', RoleController.buscarPorId)
    .delete('/roles/id/:id')
    .put('/roles/id/:id')

module.exports = router

