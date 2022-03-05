const express = require('express');
const db = require('./config/connection');  //db connection
const routes = require('./routes');         //path to express routes
const PORT = process.env.port || 3001;      //run on specified environment var or default to 3001
const app = express();                      //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);  //output to confirm server running
    });
  });