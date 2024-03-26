const { Router } = require('express')
const UsuarioController = require('../controllers/usuarioController')
const autenticado = require('../middlewares/autenticado') 

const router = Router()

router.post('/usuarios', UsuarioController.cadastrar)

router.use(autenticado)

router
    .get('/usuarios', UsuarioController.buscarTodos)
    .get('/usuarios/id/:id', UsuarioController.buscarPorId)
    .put('/usuarios/id/:id', UsuarioController.atualizar)
    .delete('/usuarios/id/:id', UsuarioController.deletar)

module.exports = router
