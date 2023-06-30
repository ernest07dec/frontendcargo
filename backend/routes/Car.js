/** @format */

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const CreateCar = require("../services/car/Create");
const RetrieveAllCar = require("../services/car/RetrieveAll");
const DeleteCar = require("../services/car/Delete");
const UpdateCar = require("../services/car/Update");
const RetrieveCar = require("../services/car/Retrieve");


router.use(authMiddleware);
router.post("/create", async (req, res) => {
  const {   
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
  } = req.body;
  
  const results = await CreateCar(
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
  );
  if (results) {
    res.status(200).send({
        cartype: req.body.cartype,
        platenumber: req.body.platenumber,
        seatsavailable: req.body.seatsavailable,
        initialrateperday: req.body.initialrateperday,
        officecode: req.body.officecode,
        ownername: req.body.ownername,
        ownerphonenumber: req.body.ownerphonenumber,
        owneremail: req.body.owneremail,
        carstatus: req.body.carstatus,
        remarks: req.body.remarks,
        reservationidnumbers: req.body.reservationidnumbers,
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Failed",
    });
  }
});

router.get("/retrieveAll", async (req,res) => {
  
  
  const results = await RetrieveAllCar();
  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Not Retrieved",
    });
  }
})

router.get("/retrieve/:id", async (req,res) => {
  const _id = req.params.id;
  
  const results = await RetrieveCar(_id);
  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Not Retrieved",
    });
  }
})





router.put("/update/:id", async (req, res) => {
  const _id = req.params.id;
  const { set } = req.body;

  const results = await UpdateCar(_id, set);
  if (results.success) {
    res.status(200).send({
      status: results.success,
      message: results.message,
      newData: results.newData,
    });
  } else {
    res.status(500).send({
      status: results.success,
      message: results.message,
    });
  }
});


router.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id;

  const results = await DeleteCar(_id);
  if (results.success) {
    res.status(200).send({
      status: results.success,
      message: results.message,
    });
  } else {
    res.status(500).send({
      status: results.sucess,
      message: results.message,
    });
  }
});

module.exports = router;
