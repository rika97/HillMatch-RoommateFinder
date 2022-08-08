import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    userName: String,
    creator: String,
    parking: String,
    roomType: String,
    leaseType: String,
    rentPrice: Number,
    utilitiesPrice: Number,
    travelTime: Number,
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const PostApartment = mongoose.model("PostApartment", postSchema);

export default PostApartment;