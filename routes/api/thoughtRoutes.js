const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought
} = require("../../controllers/thoughtController");
// TODO: /api/thoughts

// GET to get all thoughts
// POST to create a new thought (pushes the created thought's _id to the associated user's thoughts array field)
router.route("/").get(getAllThoughts).post(createThought);

// GET to get a single thought by its _id
router.route("/:thoughtId").get(getSingleThought);

// .put(updateThought)
//   .delete(removeThought)

// example data:
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

// TODO: /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
