const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});



//Need seed data --> either JS objects or JSON file
//require in your models
//require the seed data into the seed file
//connect to the database
//drop the relevant collections
//create the parent collections (User)
//if you have related data, iterate over the data (thoughts) and for each, generate a (random number * the length of the user array)
//find the user at that index
//insert that user's _id OR username into that thought doc USE spread synthax 
//find and update the user whose _id or username was just inserted as the creator of the thought
//end the seed process with process.exit(0)

//call the seed process


//no need to seed reactions
