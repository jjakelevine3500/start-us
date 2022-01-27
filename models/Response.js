const { Model, DataTypes } = require('sequelize');
const { Developer } = require('.');
const sequelize = require('../config/connection');

class response extends Model {}

Response.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        response_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },
        developer_id:{
            type: DataTypes.INTEGER,
            references: {
                model:  'developer',
                key: 'id'
            }
        },
        service_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'service',
                key: 'id'
            }
        },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'response'
}
);

module.exports = response;