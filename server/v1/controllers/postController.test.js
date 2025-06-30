const request = require('supertest');
const express = require('express');
const postController = require('../controllers/postController');
const Post = require('../models/post');

const app = express();
app.use(express.json());

app.get('/posts', postController.getAllPosts);
app.post('/posts', postController.createPost);

jest.mock('../models/post');

describe('Post Controller', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /posts', () => {
        it('should return all posts (200)', async () => {
            const fakePosts = [
                {
                    _id: '1',
                    title: 'Premier Post',
                    content: 'Contenu du premier post',
                    author: 'Jean Dupont',
                    date: new Date('2024-06-01T10:00:00Z')
                },
                {
                    _id: '2',
                    title: 'Deuxième Post',
                    content: 'Contenu du deuxième post',
                    author: 'Alice Martin',
                    date: new Date('2024-06-15T15:30:00Z')
                }
            ];
            Post.find.mockResolvedValue(fakePosts);

            const res = await request(app).get('/posts');

            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(JSON.parse(JSON.stringify(fakePosts))); // pour éviter l'erreur liée aux objets Date
            expect(Post.find).toHaveBeenCalledTimes(1);
        });

        it('should return 500 on error', async () => {
            Post.find.mockRejectedValue(new Error('DB Error'));

            const res = await request(app).get('/posts');

            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe('Error fetching posts');
            expect(res.body.error).toBe('DB Error');
        });
    });

    describe('POST /posts', () => {
        it('should create a post and return it (200)', async () => {
            const newPost = {
                title: 'Nouveau Post',
                content: 'Du contenu ici',
                author: 'Marie Curie',
                date: new Date('2025-01-01T12:00:00Z')
            };
            const createdPost = { _id: '123', ...newPost };

            Post.create.mockResolvedValue(createdPost);

            const res = await request(app)
                .post('/posts')
                .send(newPost);

            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(JSON.parse(JSON.stringify(createdPost)));
            expect(Post.create).toHaveBeenCalledWith(expect.objectContaining({
                title: 'Nouveau Post',
                content: 'Du contenu ici',
                author: 'Marie Curie',
                date: '2025-01-01T12:00:00.000Z'
            }));
        });

        it('should return 500 if creation fails', async () => {
            Post.create.mockRejectedValue(new Error('Insert Error'));

            const res = await request(app)
                .post('/posts')
                .send({
                    title: 'Post Invalide',
                    content: 'Pas d’auteur',
                    date: new Date()
                });

            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe('Error creating post');
            expect(res.body.error).toBe('Insert Error');
        });
    });
});
