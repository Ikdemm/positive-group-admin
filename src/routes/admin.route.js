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

module.exports = router;
