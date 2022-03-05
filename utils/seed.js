const connection = require('../config/connection');
const { Users, Thoughts, Friends } = require('../models');



connection.on('error', (err) => err);       //throw error if fail to connect to db

connection.once('open', async () => {
    console.log('connected');
}
);