const { Schema, model } = require("mongoose");
const FormatDate = require("../utils/formatdate");

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
      if (date) return FormateDate(date);
    },
  },
});

module.exports = reactionSchema;
