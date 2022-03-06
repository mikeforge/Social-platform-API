const { Users } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
      Users.find()
        .then(async (users) => {
          const usersObj = {
            users
          };
          return res.json(usersObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single user
  getSingleUser(req, res) {
    Users.findOne({ id: req.params.userId })
      .select('-__v')
      .lean()
      .then(async (users) =>
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              users
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

    // create a new user
    createUser(req, res) {
        Users.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
    }
    
};