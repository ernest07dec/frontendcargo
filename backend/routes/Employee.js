/** @format */

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const CreateEmployee = require("../services/employee/Create");
const RetrieveAllEmployee = require("../services/employee/RetrieveAll");
const RetrieveEmployee = require("../services/employee/Retrieve");
const DeleteEmployee = require("../services/employee/Delete");
const UpdateEmployee = require("../services/employee/Update");


router.use(authMiddleware);
router.post("/create", async (req, res) => {
    const { firstname,
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
      position,} = req.body;
    
    const results = await CreateEmployee(firstname,
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
      position,);
    if (results) {
      res.status(200).send({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          age: req.body.age,
          address: req.body.address,
          gender: req.body.gender,
          maritalstatus: req.body.maritalstatus,
          zipcode: req.body.zipcode,
          nationality: req.body.nationality,
          email: req.body.email,
          phonenumber: req.body.phonenumber,
          officeCode: req.body.officeCode,
          reportsto: req.body.reportsto,
          position: req.body.position,
          
      });
    } else {
      res.status(500).send({
        status: results,
        message: "Failed",
      });
    }
  });

router.get("/retrieveAll", async (req,res) => {
  
  
    const results = await RetrieveAllEmployee();
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
    
    const results = await RetrieveEmployee(_id);
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
  
    const results = await UpdateEmloyee(_id, set);
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
  
    const results = await DeleteEmployee(_id);
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
