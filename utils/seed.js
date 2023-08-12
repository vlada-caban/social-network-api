const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  users,
  allThoughts,
  getRandomArrItem,
  getReactions
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  //clearing data first
  await Thought.deleteMany({});
  await User.deleteMany({});

  const usersArr = [];

  //creating users array with all the users from data file
  for (let i = 0; i < users.length; i++) {
    usersArr.push({
      username: users[i].username,
      email: users[i].email,
      thoughts: [],
      friends: [],
    });
  }

  //distributing all the thoughts among random users
  for (let i = 0; i < allThoughts.length; i++) {
    //getting random user
    const randomUser = getRandomArrItem(usersArr);

    //random num 1 through 5
    const randomNum = Math.floor(Math.random() * 4) + 1;
    console.log(randomNum);

    //creating a thought for that user
    const thought = new Thought({
      thoughtText: allThoughts[i],
      username: randomUser.username,
      reactions: getReactions(randomNum),
    });
    //saving into DB
    await thought.save();
   
    //adding thought into array of throughts for that user
    randomUser.thoughts.push(thought._id);
  }

  //creating user collection
  await User.collection.insertMany(usersArr);

  console.table(usersArr);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
