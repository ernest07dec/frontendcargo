const User = require("../../models/User");

module.exports = async (
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
  hasdriverlicense,
  driveridno,
  verified
) => {
  try {
    await User.insertMany({
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
      hasdriverlicense,
      driveridno,
      verified
    });

    // Retrieve all users after insertion
    const allUsers = await User.find({}, "-__v"); // Exclude the "__v" field from the results

    return allUsers;
  } catch (error) {
    console.error(error);
    return [];
  }
};
