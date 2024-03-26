const PermissaoService = require('../services/permissaoService')
const permissaoService = new PermissaoService()

class PermissaoController {
    static async cadastrar(req, res) {
        const { nome, descricao } = req.body

        try {
            const permissao = await permissaoService.cadastrar({ nome, descricao })

            res.status(201).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodos(req, res) {
        try {
            const permissoes = await permissaoService.buscar()

            res.status(200).send(permissoes)
        } catch (error) {
            res.status(400).send({ message: error.message })

        }
    }

    static async buscarPorId(req, res) {
        const { id } = req.params

        try {
            const permissao = await permissaoService.buscar(id)

            res.status(200).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async atualizar(req, res) {
        const { id } = req.params
        const data = req.body

        try {
            const permissao = await permissaoService.atualizar({ id, ...data })

            res.status(200).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message })

        }
    }

    static async deletar(req, res) {
        const { id } = req.params

        try {
            await permissaoService.deletar(id)

            res.status(200).send({ message: 'Permissão excluída com sucesso.' })
        } catch (error) {
            res.status(400).send({ message: error.message })

        }
    }
}

module.exports = PermissaoController
