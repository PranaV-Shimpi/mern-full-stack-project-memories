import mongoose from "mongoose";

// Define the schema for the Post model
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Ensures no leading/trailing whitespaces
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    creator: {
        type: String,
        required: true,
    },
    tags: [String], // Array of strings
    selectedFile: { type: String },
    likeCount: {
        type: Number,
        default: 0, // Default likes to 0
    },
    createdAt: {
        type: Date,
        default: new Date(), // Sets default value to current date
    },

});

// Create and export the model
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;