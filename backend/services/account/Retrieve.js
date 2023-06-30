/** @format */

const Account = require("../../models/Account");

module.exports = async (_id) => {
  try {
    const results = await Account.findById(_id);
    return results;
  } catch (error) {
    return [];
  }
};
