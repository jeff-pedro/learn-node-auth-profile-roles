const database = require('../models')

module.exports = (listaPermissoes) => {
    return async (req, res, next) => {
        const { usuarioId } = req

        const usuario = await database.usuarios.findOne({
            include: [
                {
                    model: database.permissoes,
                    as: 'usuario_permissoes',
                    attributes: ['id', 'nome']
                },
                {
                    model: database.roles,
                    as: 'usuario_roles',
                    attributes: ['id', 'nome']
                }
            ],
            where: {
                id: usuarioId
            }
        })

        const permissao = await usuario.usuario_roles.map(async (role) => {
            const roleCadastrada = await database.roles.findOne({
                include: [
                    {
                        model: database.permissoes,
                        as: 'roles_das_permissoes',
                        attributes: ['id', 'nome']
                    }
                ],
                where: {
                    id: role.id
                }
            })

            const permissaoCadastrada = await roleCadastrada.roles_das_permissoes
                .map((permissao) => permissao.nome)
                .some((permissao) => listaPermissoes.includes(permissao))

            return await permissaoCadastrada
        })

        permissao.forEach(async (element) => {
            const permissoaConcedida = await element

            if(!permissoaConcedida){
                return res.status(401).send('Usuário não tem permissão para esta rota.')
            }

            return next()
        })
    }
}