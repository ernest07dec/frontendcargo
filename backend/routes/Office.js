/** @format */

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const CreateOffice = require("../services/office/Create");
const RetrieveAllOffice = require("../services/office/RetrieveAll");
const RetrieveOffice = require("../services/office/Retrieve");
const DeleteOffice = require("../services/office/Delete");
const UpdateOffice = require("../services/office/Update");


router.use(authMiddleware);
router.post("/create", async (req, res) => {
    const {   officename,
      locationaddress,
      territory,
      heademployeeid,
      zipcode,
      phonenumber,
      email,
      telephonenumber,} = req.body;
    
    const results = await CreateOffice(
      officename,
      locationaddress,
      territory,
      heademployeeid,
      zipcode,
      phonenumber,
      email,
      telephonenumber,);
    if (results) {
      res.status(200).send({
        officename: req.body.officename,
        locationaddress: req.body.locationaddress,
        territory: req.body.territory,
          heademployeeid: req.body.heademployeeid,
          zipcode: req.body.zipcode,
          phonenumber: req.body.phonenumber,
          email: req.body.email,
          telephonenumber: req.body.telephonenumber,
         
          
      });
    } else {
      res.status(500).send({
        status: results,
        message: "Failed",
      });
    }
  });

router.get("/retrieveAll", async (req,res) => {
  
  
    const results = await RetrieveAllOffice();
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
    
    const results = await RetrieveOffice(_id);
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
  
    const results = await UpdateOffice(_id, set);
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
  
    const results = await DeleteOffice(_id);
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
