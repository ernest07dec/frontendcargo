/** @format */

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const CreateAccount = require("../services/account/Create");
const RetrieveAllAccount= require("../services/account/RetrieveAll");
const DeleteAccount = require("../services/account/Delete");
const UpdateAccount = require("../services/account/Update");
const RetrieveAccount = require("../services/account/Retrieve");


router.use(authMiddleware);
router.post("/create", async (req, res) => {
  const {   
    username,
    password
  } = req.body;
  
  const results = await CreateAccount(
   username,
   password)
  if (results) {
    res.status(200).send({
        username:req.body.username,
        password:req.body.password
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Failed",
    });
  }
});

router.get("/retrieveAll", async (req,res) => {
  
  
    const results = await RetrieveAllAccount();
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
  
  const results = await RetrieveAccount(_id);
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
  
    const results = await UpdateAccount(_id, set);
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
  
    const results = await DeleteAccount(_id);
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
