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

  //update user
  async updateThought(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      console.error(err);
    }
  },

  async removeUser(req, res) {
    try {
      //TODO: remove thoughts that belong to that user
      //  const username = await User.findOne({ _id: req.params.userId });
      //  const allThoughts = await Thought.find({username});
      //  console.log(allThoughts);
      //  for (let i=0; i<allThoughts.length; i++) {
      //  }

      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json({ message: "User removed successfully!" });
    } catch (err) {
      console.error(err);
    }
  },
};
