const { User, Thought } = require("../models");

module.exports = {
  //get all the thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get one thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new thought
  async createThought(req, res) {
    try {
      const user_id = req.body.userId;
      const thoughtText = req.body.thoughtText;
      const username = req.body.username;

      const thoughtData = await Thought.create({ thoughtText, username });

      const user = await User.findOneAndUpdate(
        { _id: user_id },
        { $push: { thoughts: thoughtData._id } },
        { new: true }
      );

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      console.error(err);
    }
  },

  //remove thought
  async removeThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json({ message: "Thought removed successfully!" });
    } catch (err) {
      console.error(err);
    }
  },

  // add a new reaction to a thought
  async addReaction(req, res) {
    try {
      const reactionBody = req.body.reactionBody;
      const username = req.body.username;

      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: { reactionBody, username } } },
        { new: true }
      );

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
      const reactionId = req.body.reactionId;

      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId } } },
        { new: true }
      );

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
