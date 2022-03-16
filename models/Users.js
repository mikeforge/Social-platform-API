const { Schema, model } = require('mongoose');

const usersSchema = new Schema(
    {
        first: {
            type: String,
            required: true,
            max_length: 50,
        },
        last: {
            type: String,
            required: true,
            max_length: 50,
          },
        userName: {
              type: String,
              unique: true,
              required: true,
              max_length: 100,
          },
        email: {
            type: String,
            required: true,
            max_length: 50,
          },
        thoughts: [
              {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts',
          },
        ],
        friends: [
              {
                  type: Schema.Types.ObjectId,
                  ref: 'Users',
              },
          ],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Users = model('Users', usersSchema);

module.exports = Users