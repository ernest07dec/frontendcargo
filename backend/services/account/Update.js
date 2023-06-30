const Account = require("../../models/Account");

module.exports = async (_id, set) => {
  try {
    const account = await Account.findById(_id);
    if (!account) {
      return { success: false, message: "Account not found" };
    }

    await Account.updateOne({ _id }, { $set: set });

    const updatedAccount = await Account.findById(_id);

    return { success: true, message: "Account updated successfully", newData: updatedAccount};
  } catch (error) {
    return { success: false, message: "Failed to update account" };
  }
};
