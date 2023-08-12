const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
// GET route to get all the users and POST route to create a new user
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId
// GET a single user by its _id and populated thought and friend data
// PUT route to update user by _id
// DELETE route to remove user by _id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(removeUser);

// BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list
router.route("/:userId/friends/:friendId").put(addFriend).delete(removeFriend);


module.exports = router;