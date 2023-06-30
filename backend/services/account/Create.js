/** @format */

const Account = require("../../models/Account");

module.exports = async (
  
  username,
  password
  
) => {
  try {
    await Account.create({
     
      username,
      password
      
    });
    return true;
  } catch (error) {
    return false;
  }
};
