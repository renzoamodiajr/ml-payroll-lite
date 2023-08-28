"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Loan_application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Loan_application.init(
    {
      loan_application_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      loan_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      loan_amount: {
        type: DataTypes.FLOAT(8, 2),
        allowNull: false,
      },
      amount_paid: {
        type: DataTypes.FLOAT(8, 2),
        allowNull: false,
      },
      amount_payable: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      loan_cycle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_of_cycles: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 1 = APPROVED || 0 = PENDING
      loan_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      remarks: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Loan_application",
      paranoid: true,
      timestamps: true,
    }
  );
  return Loan_application;
};
