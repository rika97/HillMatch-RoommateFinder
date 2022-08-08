import express from 'express';
import mongoose from 'mongoose';
import PostApartment from '../models/postApartment.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    const { page } = req.query;

    try{
        const LIMIT = 4;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await PostApartment.countDocuments({});
        const posts = await PostApartment.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, parking, roomType, leaseType } = req.query;
    try {
        const title = new RegExp(searchQuery, 'i');

        const posts = await PostApartment.find({ $or: [{ title }, { parking }, { roomType }, { leaseType }] });

        res.json({ data: posts });

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostApartment.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPostApartment = new PostApartment({...post, creator: req.userId, createdAt: new Date().toISOString()});

    try {
        await newPostApartment.save();
        res.status(201).json(newPostApartment);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description, userName, creator, selectedFile, parking, roomType, leaseType, rentPrice, utilitiesPrice, travelTime } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, description, userName, creator, parking, roomType, leaseType, rentPrice, utilitiesPrice, selectedFile, travelTime, _id: id };

    await PostApartment.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await PostApartment.findByIdAndRemove(id);

    console.log("DELETE");

    res.json({ message: "Post deleted successfully"});
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) {
        return res.json({ message: "Unauthenticated" });
    };

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    const post = await PostApartment.findById(id);

    const index = post.likes.findIndex((id) => id===String(req.userId));

    if(index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    };

    const updatedPost = await PostApartment.findByIdAndUpdate(id, post, { new: true });

    res.status(200).json(updatedPost);
};

export default router;