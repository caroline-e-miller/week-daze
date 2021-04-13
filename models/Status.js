const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model { }

Status.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status_option: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_updated: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        job_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'job',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'status',
    }
);

module.exports = Status;
