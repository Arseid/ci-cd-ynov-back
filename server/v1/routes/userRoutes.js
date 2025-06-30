const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @description Get all users
 * @route GET /v1/users
 * @swagger
 * /v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', userController.getAllUsers);

module.exports = router;
