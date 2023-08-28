"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payroll_attendance_computations", {
      payroll_attendance_comp_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      payroll_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "payrolls",
          key: "payroll_id",
        },
      },
      daily_rate: {
        allowNull: false,
        type: Sequelize.FLOAT(8, 3),
      },
      overtime_rate: {
        allowNull: false,
        type: Sequelize.FLOAT(8, 3),
      },
      hourly_rate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_overtime_hrs: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_overtime_pay: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_undertime_hrs: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_undertime_pay: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sick_leave_days_count: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sick_leave_pay: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vacation_leave_days_count: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vacation_leave_days_pay: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_late_hrs: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_late_pay: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_night_diff_hrs: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_night_diff_pay: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_days_worked: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      no_of_days: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("payroll_attendance_computations");
  },
};
