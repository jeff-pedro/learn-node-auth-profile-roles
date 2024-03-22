const { Router } = require('express')
const RoleController = require('../controllers/roleController')

const router = Router()

router
    .post('/roles', RoleController.cadastrar)
    .get('/roles')
    .get('/roles/id/:id')
    .delete('/roles/id/:id')
    .put('/roles/id/:id')

module.exports = router

