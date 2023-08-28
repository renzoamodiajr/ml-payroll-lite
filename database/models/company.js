"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init(
    {
      company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      account_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sub_account_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tier_label: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      company_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      logo_image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      bill_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      first_cycle_month: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_cycle_pay_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      first_cycle_from_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      first_cycle_to_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      second_cycle_month: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      second_cycle_pay_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      second_cycle_from_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      second_cycle_to_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bank_account_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phil_health_acct_no: {
        type: DataTypes.INTEGER(16),
        allowNull: false,
      },
      pag_ibig_acct_no: {
        type: DataTypes.INTEGER(16),
        allowNull: false,
      },
      sss_acct_no: {
        type: DataTypes.INTEGER(16),
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
      contact_person: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Company",
      paranoid: true,
      timestamps: true,
    }
  );
  return Company;
};
