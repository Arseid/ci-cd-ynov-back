const request = require('supertest');
const express = require('express');
const userController = require('../controllers/userController');
const User = require('../models/user');

const app = express();
app.use(express.json());

app.get('/users', userController.getAllUsers);

jest.mock('../models/user');

describe('User Controller', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /users', () => {
        it('should return all users (200)', async () => {
            const fakeUsers = [
                {
                    _id: '1',
                    name: 'Alice Dupont',
                    email: 'alice@example.com'
                },
                {
                    _id: '2',
                    name: 'Bob Martin',
                    email: 'bob@example.com'
                }
            ];
            User.find.mockResolvedValue(fakeUsers);

            const res = await request(app).get('/users');

            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(fakeUsers);
            expect(User.find).toHaveBeenCalledTimes(1);
        });

        it('should return 500 on error', async () => {
            User.find.mockRejectedValue(new Error('DB Error'));

            const res = await request(app).get('/users');

            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe('Error fetching users');
            expect(res.body.error).toBe('DB Error');
        });
    });
});
