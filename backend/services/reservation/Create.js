/** @format */

const Reservation = require("../../models/Reservation");

module.exports = async (

  userid,
  carid,
  cartype,
  datetimestart,
  datetimefinish,
  paymentstatus,
  reservationstatus,
  remarks,
  
  
) => {
  try {
    await Reservation.insertMany({
      userid,
      carid,
      cartype,
      datetimestart,
      datetimefinish,
      paymentstatus,
      reservationstatus,
      remarks,
      
      
    });
    return true;
  } catch (error) {
    return false;
  }
};
