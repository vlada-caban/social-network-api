const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");

// /api/users end point

//TODO:/api/users

// GET route to get all the users and POST route to create a new user

router.route("/").get(getAllUsers).post(createUser);

// GET a single user by its _id and populated thought and friend data

router.route("/:userId").get(getSingleUser);

// POST a new user:
//example input: 
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// PUT to update a user by its _id

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.

// TODO: /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list


module.exports = router;