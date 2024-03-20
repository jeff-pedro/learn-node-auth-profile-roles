const { verify, decode } = require('jsonwebtoken')
const { secret } = require('../config/jsonSecret')

module.exports = async (req, res, next) => {
    const token = req.headers.authotization

    if (!token) {
        res.status(401).send('Access token não informado.')
    }

    const [, accessToken] = token.split(' ')

    try {
        verify(accessToken, secret)

        const { id, email } = decode(accessToken)

        req.usuarioId = id
        req.usuarioEmail = email

        return next()
    } catch (error) {
        res.status(401).send('Usuário não autorizado.')
    }
}
