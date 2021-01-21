const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");

router.post("/", (req, res) => {
  console.log(req.body.email);
  Admin.findOne({ email: req.body.email })
    .then((admin) => {
      if (admin) {
        if (admin.password === req.body.password) {
          res.status(200).json({
            message: "SUCESS!",
          });
        } else {
          res.status(404).json({
            message: "WRONG PASSWORD",
          });
        }
      } else {
        res.status(404).json({
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
