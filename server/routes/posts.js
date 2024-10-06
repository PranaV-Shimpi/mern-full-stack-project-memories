import { Router } from "express";

const router = Router();

import {getPosts,createPost} from '../controllers/posts.js'

router.get('/', getPosts);
router.post('/', createPost);

export default router;