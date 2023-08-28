"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("batch_uploads", {
      batch_upload_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_acct_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      batch_upload_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      batch_upload_ref_num: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      date_processed: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      batch_upload_status: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      agent_ref_num: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      agent_status: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("batch_uploads");
  },
};
