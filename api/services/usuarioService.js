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

  async buscar(id) {

    let usuarios

    try {
      if (id) {
        usuarios = await database.usuarios.findOne({
          where: {
            id
          }
        })

        return usuarios
      }

      usuarios = await database.usuarios.findAll()

      return usuarios
    } catch (erro) {
      console.log(erro);
      throw new Error('Usuário não encontrado.')
    }

  }

  async atualizar(id, dto) {
    try {
      const usuarioAtualizado = await database.usuarios.update(dto, {
        where: { id }
      })

      return usuarioAtualizado
    } catch (erro) {
      console.log(erro);
      throw new Error('Erro ao atualizar usuário.')
    }
  }
}

module.exports = UsuarioService