const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        reactionText: {
            type: String,
            required: true,
        }
    }

)

module.exports = reactionsSchema;