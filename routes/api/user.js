const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


// // Matches with "/api/user/:id"
// router
//   .route("/googleid/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;


// db.inventory.find( { qty: { $eq: 20 } } )