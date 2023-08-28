"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("attendances", {
      attendance_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      leave_request_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "leave_requests",
          key: "leave_request_id",
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
      business_month: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cycle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      attendance_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time_in: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time_out: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      break_time_start: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      break_time_end: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lunch_time_start: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lunch_time_end: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      holiday_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overtime_hours: {
        type: Sequelize.FLOAT(8, 2),
        allowNull: false,
      },
      ut_hours: {
        type: Sequelize.FLOAT(8, 2),
        allowNull: false,
      },
      late_hours: {
        type: Sequelize.FLOAT(8, 2),
        allowNull: false,
      },
      nightdiff_hours: {
        type: Sequelize.FLOAT(8, 2),
        allowNull: false,
      },
      is_present: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1,
      },
      is_rest_day: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      // 1 = POSTED || 0 = PENDING
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("attendances");
  },
};
