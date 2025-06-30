const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

/**
 * @description Get All posts
 * @route GET /v1/posts
 * @swagger
 * /v1/posts:
 *   get:
 *     summary: Returns all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.get('/', postController.getAllPosts)
/**
 * @description Create a post
 * @route POST /v1/posts
 * @swagger
 * /v1/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.post('/', postController.createPost)

module.exports = router;