const { Schema, model } = require('mongoose');

const friendsSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        userName:{
            type: String,
            required: true,
            max_length: 100,
        },
        email: {
            type: String,
            required: false,
            max_length: 50,
          },
        thoughts: [
              {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts',
          }],
        friends: [
              {
                  type: Schema.Types.ObjectId,
                  ref: 'Friends',
              },
          ],
        friendCount: {}     //need to implement count function
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Friends = model('friends', friendsSchema);

module.exports = Friends