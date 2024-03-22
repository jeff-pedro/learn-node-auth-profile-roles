const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class RoleService {
    async cadastrar(dto) {
        console.log(dto)

        const role = await database.roles.findOne({
            where: {
                nome: dto.nome
            }
        })

        if (role) {
            throw new Error('Role já existe.')
        }

        try {
            const newRole = await database.roles.create({
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao
            })

            console.log(newRole)

            return newRole
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao cadastrar role.')
        }
    }
    
    async buscar(id) {
        let resultado

        try {
            if (id) {
                resultado = await database.roles.findOne({ id })
            } else {
                resultado = await database.roles.findAll()
            }

            return resultado
        } catch (error) {
            throw new Error('Nenhuma role encontrada.')
        }
    }
    async atualizar(id) { }
    async deletar(id) { }

}

module.exports = RoleService
