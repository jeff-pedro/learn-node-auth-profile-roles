'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class permissao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    permissao.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'permissao',
    })
    return permissao
}