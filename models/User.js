const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    //email validation
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      `Please enter a valid email address`,
    ],
  },
  //need ot add thoughts
  // Array of _id values referencing the Thought model
  thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],

  //need to add friends
  // Array of _id values referencing the User model (self-reference)
  friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
