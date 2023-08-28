"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attendance.hasMany(models.attendance_request, {
        foreignKey: "attendance_request_id",
      });
    }
  }

  Attendance.init(
    {
      attendance_id: {
        primaryKey: true,
        type: Types.INTEGER,
      },
      attendance_request_id: {
        type: Types.INTEGER,
        allowNull: false,
      },
      business_month: {
        type: Types.STRING,
        allowNull: false,
      },
      cycle: {
        type: Types.STRING,
        allowNull: false,
      },
      attendance_date: {
        type: Types.DATE,
        allowNull: false,
      },
      time_in: {
        type: Types.STRING,
        allowNull: false,
      },
      time_out: {
        type: Types.STRING,
        allowNull: false,
      },
      break_time_in: {
        type: Types.STRING,
        allowNull: false,
      },
      break_time_out: {
        type: Types.STRING,
        allowNull: false,
      },
      lunch_time_in: {
        type: Types.STRING,
        allowNull: false,
      },
      lunch_time_out: {
        type: Types.STRING,
        allowNull: false,
      },
      holiday_type: {
        type: Types.STRING,
        allowNull: false,
      },
      ot_hours: {
        type: Types.FLOAT(8, 2),
        allowNull: false,
      },
      ut_hours: {
        type: Types.FLOAT(8, 2),
        allowNull: false,
      },
      late_hours: {
        type: Types.FLOAT(8, 2),
        allowNull: false,
      },
      nightdiff_hours: {
        type: Types.FLOAT(8, 2),
        allowNull: false,
      },
      is_present: {
        type: Types.BOOLEAN,
        defaultValue: 1,
      },
      is_rest_day: {
        type: Types.BOOLEAN,
        defaultValue: 0,
      },
      // 1 = POSTED || 0 = PENDING
      status: {
        type: Types.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "attendance",
      timestamps: true,
      paranoid: true,
    }
  );

  return Attendance;
};
