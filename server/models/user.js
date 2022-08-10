import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },


    UID: {
        type: String,
        required: true,
    },

    id: {
        type: String,
    },

    refCode: {
        type: String,
    },

    survey: {
        type: [String],
    },
});

export default mongoose.model("User", userSchema);