import express from 'express';
import {getFeedPosts, getUserPosts, likedPosts} from '../controllers/post.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts)


// UPDATE
router.patch("/:id/like", verifyToken, likedPosts);

export default router;