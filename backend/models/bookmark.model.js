import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Entertainment', 'Development', 'Education', 'News', 'Social', 'Images', 'Others'],
        default: 'Entertainment',
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },

}, { timestamps: true });

export const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

// name, url, category, user, 