const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model {}

Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_changed: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    job_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'job',
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
