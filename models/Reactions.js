const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        userName: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        }
    }

)

module.exports = reactionsSchema;


