"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("batch_uploads", {
      batch_upload_agent_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      payroll_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "payroll_details",
          key: "payroll_id",
        },
      },
      employee_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "employees",
          key: "employee_id",
        },
      },
      batch_upload_agent_ref_num: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      batch_upload_agent_status: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      date_procesed: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("batch_uploads");
  },
};
