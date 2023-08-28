"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deduction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Deduction.init(
    {
      employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      employee_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ckyc_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ml_wallet_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tier_label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bank_account_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_hired: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tin_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      day_off: {
        type: DataTypes.SET,
        values: [
          "SUNDAY",
          "MONDAY",
          "TUESDAY",
          "WEDNESDAY",
          "THURSDAY",
          "FRIDAY",
          "SATURDAY",
        ],
      },
      allowance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      employment_status: {
        type: DataTypes.ENUM,
        values: ["REGULAR", "PROBATIONARY", "CASUAL", "PROJECT", "SEASONAL"],
      },
      // 1 = ACTIVATED || 0 = PENDING (separated)
      ml_wallet_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      // 1 = ACTIVE || 0 = INACTIVE (separated)
      employee_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "Deduction",
      paranoid: true,
      timestamps: true,
    }
  );
  return Deduction;
};
