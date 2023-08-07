const router = require("express").Router();

// /api/users end point

//TODO:/api/users

// GET all users

// ? router.route("/").get(getAllUsers);

// GET a single user by its _id and populated thought and friend data

// ? router.route("/:userId").get(getSingleUser);

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