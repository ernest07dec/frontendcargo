/** @format */

const Car = require("../../models/Car");

module.exports = async (
  
  cartype,
  platenumber,
  seatsavailable,
  initialrateperday,
  officecode,
  ownername,
  ownerphonenumber,
  owneremail,
  carstatus,
  remarks,
  reservationidnumbers,
  
) => {
  try {
    await Car.insertMany({
     
      cartype,
      platenumber,
      seatsavailable,
      initialrateperday,
      officecode,
      ownername,
      ownerphonenumber,
      owneremail,
      carstatus,
      remarks,
      reservationidnumbers,
      
    });
    return true;
  } catch (error) {
    return false;
  }
};
