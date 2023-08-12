const { User, Thought } = require("../models");

module.exports = {
  //get all the users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get one user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("thoughts")
        .populate("friends");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //update user
  async updateUser(req, res) {
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

  //add a friend to a user
  async addFriend(req, res) {
    try {
      const user_id = req.params.userId;
      const friend_id = req.params.friendId;

      const user = await User.findOneAndUpdate(
        { _id: user_id },
        { $addToSet: { friends: friend_id } },
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

  async removeFriend(req, res) {
    try {
      const user_id = req.params.userId;
      const friend_id = req.params.friendId;

      const user = await User.findOneAndUpdate(
        { _id: user_id },
        { $pull: { friends: friend_id } },
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
};
