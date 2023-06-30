/** @format */

const Office = require("../../models/Office");

module.exports = async (
 
  officename,
  locationaddress,
  territory,
  heademployeeid,
  zipcode,
  phonenumber,
  email,
  telephonenumber,
  
) => {
  try {
    await Office.insertMany({
     
      officename,
      locationaddress,
      territory,
      heademployeeid,
      zipcode,
      phonenumber,
      email,
      telephonenumber,
      
    });
    return true;
  } catch (error) {
    return false;
  }
};
