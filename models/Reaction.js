const { Schema, Types } = require("mongoose");
const formatDate = require("../utils/formatdate");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
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
    default: Date.now,
    required: true,
    //getter method to format the timestamp on query
    get: (date) => formatDate(date)
  },
});

module.exports = reactionSchema;
