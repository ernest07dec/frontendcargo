/** @format */

const Account = require("../../models/Account");

module.exports = async () => {
  try {
    const results = await Account.find();
    return results;
  } catch (error) {
    return [];
  }
};
