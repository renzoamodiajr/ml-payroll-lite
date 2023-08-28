"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employees", {
      employee_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ckyc_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ml_wallet_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tier_label: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bank_account_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_hired: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tin_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      day_off: {
        type: Sequelize.ENUM,
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
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      employment_status: {
        type: Sequelize.ENUM,
        values: ["REGULAR", "PROBATIONARY", "CASUAL", "PROJECT", "SEASONAL"],
      },
      // 1 = ACTIVATED || 0 = PENDING (separated)
      ml_wallet_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      // 1 = ACTIVE || 0 = INACTIVE (separated)
      employee_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("employees");
  },
};
