const UsuarioService = require('../services/usuarioService')
const usuarioService = new UsuarioService()

class usuarioController {
  static async cadastrar(req, res) {
    const { nome, email, senha } = req.body

    try {
      const usuario = await usuarioService.cadastrar({ nome, email, senha })

      res.status(201).send(usuario)
    } catch (erro) {
      res.status(400).send({ message: erro })
    }

  }
}

module.exports = usuarioController