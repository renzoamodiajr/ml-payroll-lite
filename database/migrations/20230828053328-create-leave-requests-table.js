"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("leave_requests", {
      leave_request_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      employee_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "employees",
          key: "employee_id",
        },
      },
      requested_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      request_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      from_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      to_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      date_overtime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      time_from: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time_to: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_hours: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      contact_person: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // 1 = APPROVED || 0 = PENDING
      approved_status: {
        type: Sequelize.STRING,
        defaultValue: 0,
      },
      approved_by: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      approved_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("leave_requests");
  },
};
