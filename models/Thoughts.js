const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Reactions');


const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thought: {
      type: String,
      required: true,
      maxlength: 200,
      minlength: 1,
      default: 'My Thought',
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
    },
    id: false
}
);

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts