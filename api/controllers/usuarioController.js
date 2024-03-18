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

  static async buscarTodos(req, res) {
    try {
      const usuarios = await usuarioService.buscar()
      res.status(200).send(usuarios)
    } catch (erro) {
      res.status(400).send({ message: erro })
    }
  }

  static async buscarPorId(req, res) {
    const { id } = req.params

    try {
      const usuario = await usuarioService.buscar(id)

      res.status(200).send(usuario)
    } catch (erro) {
      res.status(400).send({ message: erro })
    }
  }

  static async atualizar(req, res) {
    const { id } = req.params
    const dados = req.body

    try {
      await usuarioService.atualizar(id, dados)

      res.status(200).send({ message: "Usuário foi atualizado com sucesso." })
    } catch (erro) {
      res.status(400).send({ message: erro })
    }
  }

  static async deletar(req, res) {
    const { id } = req.params

    try {
      await usuarioService.deletar(id)

      res.status(200).send({ message: "Usuário foi deletado com sucesso." })
    } catch (erro) {
      res.status(400).send({ message: erro })
    }
  }
}

module.exports = usuarioController