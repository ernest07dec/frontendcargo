/** @format */

const CarType = require("../../models/CarType");

module.exports = async (
 
  textdescription,
  htmldescription,
  image,
  
) => {
  try {
    await CarType.insertMany({
      textdescription,
      htmldescription,
      image,
     
    });
    return true;
  } catch (error) {
    return false;
  }
};
