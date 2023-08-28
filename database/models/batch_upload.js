"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Batch_upload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Batch_upload.init(
    {
      batch_upload_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      batch_upload_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      batch_upload_ref_num: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_processed: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Batch_upload",
      paranoid: true,
      timestamps: true,
    }
  );
  return Batch_upload;
};
