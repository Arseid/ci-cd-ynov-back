const request = require('supertest');
const app = require('./app');
const User = require('./v1/models/user');
const Post = require('./v1/models/post');

jest.mock('./v1/models/user');
jest.mock('./v1/models/post');

describe('App integration', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('GET / should return Hello World', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello World');
    });

    it('GET /v1/users should return users', async () => {
        const fakeUsers = [
            { _id: '1', name: 'Alice', email: 'alice@example.com' },
            { _id: '2', name: 'Bob', email: 'bob@example.com' }
        ];
        User.find.mockResolvedValue(fakeUsers);

        const res = await request(app).get('/v1/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(fakeUsers);
        expect(User.find).toHaveBeenCalledTimes(1);
    });

    it('GET /v1/posts should return posts', async () => {
        const fakePosts = [
            {
                _id: '1',
                title: 'Post 1',
                content: 'Contenu',
                author: 'Alice',
                date: '2024-05-01T10:00:00.000Z'
            }
        ];
        Post.find.mockResolvedValue(fakePosts);

        const res = await request(app).get('/v1/posts');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(fakePosts);
        expect(Post.find).toHaveBeenCalledTimes(1);
    });
});
