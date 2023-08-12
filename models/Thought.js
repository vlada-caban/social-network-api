const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");
//import helper
// const { format_date } = require("../utils/formatdate");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
      //getter method to format the timestamp on query
      get: (date) => {
        // if (date) return date.toISOString().split("T")[0];
        //create a helper method
        //return HelperMethod(date)
        if (date)
          return `${date.toDateString()} at ${date.toLocaleTimeString()}`;
      },
    },
    username: {
      type: String,
      required: true,
    },
    //Array of nested documents created with the reactionSchema
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
