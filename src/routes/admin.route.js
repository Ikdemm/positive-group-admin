const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");

router.post("/", (req, res) => {
  Admin.findOne({ email: req.body.email })
    .then((admin) => {
      if (admin) {
        if (admin.password === req.body.password) {
          res.send({
            message: "SUCESS!",
          });
        } else {
          res.send({
            message: "WRONG PASSWORD",
          });
        }
      } else {
        res.send({
          message: "ADMIN NOT FOUND!",
        });
      }
    })
    .catch((error) => {
      console.log("error: ", error);
      res.status(400).json({
        error: error,
      });
    });
});

router.get("/", async (req, res) => {
  try {
    const adminData = await Admin.find({});
    res.send(adminData[0]);
  } catch (e) {
    console.error(e);
  }
});

router.put("/", async (req, res) => {
  try {
    const newData = await Admin.updateOne(
      { firstName: req.body.oldName },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emai: req.body.email,
        phoneNumber: req.body.phoneNumber,
      }
    );
    res.send(newData);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
