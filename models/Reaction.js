const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Schema.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    //getter method to format the timestamp on query
    get: (date) => {
      if (date) return date.toISOString().split("T")[0];
    },
  },
});

module.exports = reactionSchema;
