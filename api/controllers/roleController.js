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

    static async buscarTodos(req, res) { }
    static async buscarPorId(req, res) { }
    static async atualizar(req, res) { }
    static async deletar(req, res) { }
}

module.exports = RoleController
