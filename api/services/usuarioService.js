const { v4: uuidv4 } = require('uuid')
const bcryptjs = require('bcryptjs')
const database = require('../models')

class UsuarioService {
  async cadastrar(dto) {
    const usuario = await database.usuarios.findOne({
      where: {
        email: dto.email,
      }
    })

    if (usuario) {
      throw new Error('Usuário já cadastrado.')
    }

    try {
      const hashSenha = bcryptjs.hashSync(dto.senha, 8)

      const novoUsuario = await database.usuarios.create({
        id: uuidv4(),
        nome: dto.nome,
        email: dto.email,
        senha: hashSenha
      })

      return novoUsuario
    } catch (erro) {
      throw new Error('Erro ao cadastrar usuário.')
    }

  }
}

module.exports = UsuarioService