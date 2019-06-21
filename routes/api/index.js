const router = require("express").Router();

const studentRoutes = require("./students.js");
const userRoutes = require("./users.js");

router.use("/students", studentRoutes);
router.use("/users", userRoutes);
module.exports = router;
