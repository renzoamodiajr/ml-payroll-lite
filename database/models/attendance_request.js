import { Model } from "sequelize";

const initModel = (sequelize, Types) => {
  class Attendance_request extends Model {
    static associate(models) {
      Attendance_request.belongsTo(models.attendance, {
        foreignKey: "attendance_id",
      });
    }
  }

  Attendance_request.init(
    {
      attendance_request_id: {
        primaryKey: true,
        type: Types.INTEGER,
      },
      requested_date: {
        allowNull: false,
        type: Types.DATE,
      },
      request_type: {
        type: Types.STRING,
        allowNull: false,
      },
      reason: {
        type: Types.STRING,
        allowNull: false,
      },
      from_date: {
        allowNull: false,
        type: Types.DATE,
      },
      to_date: {
        allowNull: false,
        type: Types.DATE,
      },
      date_overtime: {
        allowNull: false,
        type: Types.DATE,
      },
      time_from: {
        type: Types.STRING,
        allowNull: false,
      },
      time_to: {
        type: Types.STRING,
        allowNull: false,
      },
      number_of_hours: {
        type: Types.INTEGER,
        allowNull: false,
      },
      contact_person: {
        type: Types.STRING,
        allowNull: false,
      },
      contact_number: {
        type: Types.STRING,
        allowNull: false,
      },
      // 1 = APPROVED || 0 = PENDING
      approved_status: {
        type: Types.STRING,
        defaultValue: 0,
      },
      approved_by: {
        type: Types.STRING,
        allowNull: false,
      },
      approved_date: {
        allowNull: false,
        type: Types.DATE,
      },
    },
    {
      sequelize,
      modelName: "attendance_request",
      paranoid: true,
    }
  );

  return Attendance_request;
};

export default initModel(connection, DataTypes);
