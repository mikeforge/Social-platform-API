const { Thoughts, Users } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
      Thoughts.find()
        .then(async (thoughts) => {
          const thoughtsObj = {
            thoughts
          };
          return res.json(thoughtsObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single thought
  getSingleThought(req, res) {
    Thoughts.findOne({ id: req.params.thoughtId })
      .select('-__v')
      .lean()
      .then(async (thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json({
              thoughts
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

    // create a new thought
    createThought(req, res) {
        Thoughts.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
    //   Users.put(req.body)   -- Need to link thoughts to users on creation
    }
    
};