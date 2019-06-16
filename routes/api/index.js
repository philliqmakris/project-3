const router = require("express").Router();
const studentRoutes = require("./student.js");
const userRoutes = require("./user.js");

// Student routes
router.use("/student", studentRoutes);

// User routes
router.use("/user", userRoutes);


module.exports = router;
