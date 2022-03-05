const { connect, connection } = require('mongoose');

// Node checks environment variable, if exists, otherwise, it assumes you are running this appl locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;