"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    business_month;
    cycle;
    batch_upload_id;
    transfer_money_to_sub_acct_id;
    employee_id;
    working_days_pay_amt;
    gross_pay;
    total_deduction_amt;
    net_pay;
    allowance_amt;
    add_adjustment;
    deduct_adjustment;
    post_status;
    remarks;
    approved_by;
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
