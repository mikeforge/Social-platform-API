const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reactions');


const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      default: 'My Thought',
    },
    userName: {
      type: String,
      required: true,
      max_length: 100
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    reactions: [reactionsSchema]
    },
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false
}
);

// thoughtSchema.virtual('reactionCount').get(() => {
//   return this.reactions.max_length;
// });

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts