const RoleService = require('../services/roleService')
const roleService = new RoleService()

class RoleController {
    static async cadastrar(req, res) {
        const { nome, descricao } = req.body

        try {
            const role = await roleService.cadastrar({ nome, descricao })

            res.status(201).send(role)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodos(req, res) {
        try {
            const roles = await roleService.buscar()

            res.status(200).send(roles)
        } catch (error) {
            res.status(400).send({ message: error.message })

        }
    }

    static async buscarPorId(req, res) {
        const { id } = req.params
        
        try {
            const role = await roleService.buscar(id)

            res.status(200).send(role)
        } catch (error) {
            res.status(400).send({ message: error.message })

        }
    }
    static async atualizar(req, res) { }
    static async deletar(req, res) { }
}

module.exports = RoleController
