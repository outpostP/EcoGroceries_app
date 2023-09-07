'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart_Stock extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  Cart_Stock.init(
    {
      id_cart: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      id_stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      price: {
        type: DataTypes.INTEGER
      },
      qty: {
        type: DataTypes.INTEGER
      },
      weight: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Cart_Stock',
      tableName: 'Cart_Stock',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Cart_Stock;
};