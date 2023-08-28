"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employee_profiles", {
      employee_profile_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "employees",
          key: "employee_id",
        },
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      suffix: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cities",
          key: "city_id",
        },
      },
      province_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "provinces",
          key: "province_id",
        },
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "countries",
          key: "country_id",
        },
      },
      contact_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emergency_contact_number1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emergency_contact_number2: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      educational_attainment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      school_graduated: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      degree: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["MALE", "FEMALE"],
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      place_of_birth: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      civil_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("employee_profiles");
  },
};
