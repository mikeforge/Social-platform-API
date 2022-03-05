const connection = require('../config/connection');
const { Users, Thoughts, Friends } = require('../models');
const { getRandomName} = require('./data');


connection.on('error', (err) => err);       //throw error if fail to connect to db

connection.once('open', async () => {
    console.log('connected');

await Users.deleteMany({});

await Friends.deleteMany({});

await Thoughts.deleteMany({});

const users = [];

  // Loop 20 times -- add users to the user array
  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const userName = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      first,
      last,
      userName,
    });
  }

   // Add students to the collection and await the results
   await Users.collection.insertMany(users);

   console.table(users);
   console.info('Data Seeded');
   process.exit(0);
});