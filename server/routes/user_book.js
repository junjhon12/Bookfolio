const express = require("express");
const {
  getUserLibrary,
  addUserLibraryBook,
  updateUserLibraryBook,
  deleteUserLibraryBook,
} = require("../controllers/user_book.js");

const router = express.Router();

router.route("/").get(getUserLibrary).post(addUserLibraryBook);
router.route("/:book_id").put(updateUserLibraryBook).delete(deleteUserLibraryBook);

module.exports = router;
