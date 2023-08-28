"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transfer_transactions", {
      transfer_transaction_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      business_month: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // values should be in comma separated (w/o space)
      // ex: 1,2,3,4,5
      employee_ids: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cycle: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      transfer_ref_num: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      transfer_amount: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company_acct_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company_sub_acct_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      transfer_date: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      transfer_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("transfer_transactions");
  },
};
