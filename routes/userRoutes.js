const express = require("express");
const {
  registerUser,
  authUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/view").get(getUser);
router.route("/edit").post(updateUser);
router.route("/delete").delete(deleteUser);

module.exports = router;
