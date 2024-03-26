const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class PermissaoService {
    async cadastrar(dto) {
        const permissao = await database.permissoes.findOne({
            where: {
                nome: dto.nome
            }
        })

        if (permissao) {
            throw new Error('Permissão já existe.')
        }

        try {
            const newPermissao = await database.permissoes.create({
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao
            })

            return newPermissao
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao cadastrar permissão.')
        }
    }

    async buscar(id) {
        let resultado

        try {
            if (id) {
                resultado = await database.permissoes.findOne({ id })

                if (!resultado) {
                    throw new Error('Permissão informada não cadastrada!')
                }

            } else {
                resultado = await database.permissoes.findAll()
            }

            return resultado
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async atualizar(dto) {
        try {

            let permissao = await database.permissoes.findOne({
                where: {
                    id: dto.id
                }
            })

            if (!permissao) {
                throw new Error('Permissão informada não cadastrada!')
            }

            permissao.nome = dto.nome
            permissao.descricao = dto.descricao

            await permissao.save()

            return await permissao.reload()
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async deletar(id) {
        try {
            const permissao = await database.permissoes.destroy({ where: { id } })

            if (!permissao) {
                throw new Error('Permissão informada não cadastrada!')
            }

            return
        } catch (error) {
            throw new Error(error.message)
        }
    }

}

module.exports = PermissaoService
