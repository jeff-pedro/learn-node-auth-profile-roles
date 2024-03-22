const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class PermissaoService {
    async cadastrar(dto) {
        const permissao = await database.permissao.findOne({
            where: {
                nome: dto.nome
            }
        })

        if (permissao) {
            throw new Error('Permissao já existe.')
        }

        try {
            const newPermissao = await database.permissao.create({
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao
            })

            return newPermissao
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao cadastrar permissao.')
        }
    }

    async buscar(id) {
        let resultado

        try {
            if (id) {
                resultado = await database.permissao.findOne({ id })
            } else {
                resultado = await database.permissao.findAll()
            }

            return resultado
        } catch (error) {
            throw new Error('Nenhuma permissao encontrada.')
        }
    }
    async atualizar(id, dto) {
        try {
            const up = await database.permissao.update(dto, {
                where: { id }
            })

            console.log(up)

            return
        } catch (error) {
            throw new Error('Não foi possível atualizar a permissao.')
        }
    }
    async deletar(id) {
        try {
            await database.permissao.destroy({ where: { id } })

            return
        } catch (error) {
            throw new Error('Não foi excluír a permissao.')
        }
    }

}

module.exports = PermissaoService
