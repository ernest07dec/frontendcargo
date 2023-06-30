/** @format */

const Payment = require("../../models/Payment");

module.exports = async ( checknumber, paymentdate, paymentstatus) => {
  try {
    await Payment.insertMany({
      
      checknumber,
      paymentdate,
      paymentstatus,
      
    });
    return true;
  } catch (error) {
    return false;
  }
};
