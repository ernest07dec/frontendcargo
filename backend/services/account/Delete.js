const Account = require("../../models/Account");

module.exports = async (_id) => {
  try {
    const account = await Account.findById(_id);
    if (!account) {
      return { success: false, message: "Account not found" };
    }
    await Account.deleteOne({ _id });
    return { success: true, message: "Account deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete account" };
  }
};
