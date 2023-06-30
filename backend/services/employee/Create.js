/** @format */

const Employee = require("../../models/Employee");

module.exports = async (  firstname,
  lastname,
  age,
  address,
  gender,
  maritalstatus,
  zipcode,
  nationality,
  email,
  phonenumber,
  officeCode,
  reportsto,
  position,
  ) => {
  try {
    await Employee.insertMany({
      firstname,
      lastname,
      age,
      address,
      gender,
      maritalstatus,
      zipcode,
      nationality,
      email,
      phonenumber,
      officeCode,
      reportsto,
      position,
      

    });
    return true;
  } catch (error) {
    return false;
  }
};

