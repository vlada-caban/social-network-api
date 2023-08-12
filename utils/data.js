//thoughts are taken from https://parade.com/living/shower-thoughts
const allThoughts = [
  "Even when a balloon is half inflated, it is completely full.",
  "Does a straw have one hole, or two?",
  "Millions of people are doing the exact same thing as you are right now.",
  "Nothing is on fire. Fire is on things.",
  "How do our brains remember that we forgot something, but we can't remember what that thing was?",
  "Peer pressure as an adult is seeing your neighbor mow their lawn.",
  "Your first birthday is technically your second birthday.",
  "Your stomach thinks all potatoes are mashed.",
  "When my dog brings me the same toy, I wonder if it's his favorite toy or if he thinks it is my favorite toy.",
  "I correct autocorrect more than it corrects me.",
];

const users = [
  { username: "tom123", email: "tom123@gmail.com" },
  { username: "sarah", email: "sarah@hotmail.com" },
  { username: "jess234", email: "jess@yahoo.com" },
  { username: "steve", email: "steve999@gmail.com" },
  { username: "john", email: "john1@gmail.com" },
];

const allReactions = [
  "Cool thought!",
  "Wow, can't believe it.",
  "I disagree",
  "This is impressive",
  "Never thought of it, but it's actually true",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(allReactions),
      username: getRandomArrItem(users).username,
    });
  }
  return results;
};

module.exports = { users, allThoughts, getRandomArrItem, getReactions};
