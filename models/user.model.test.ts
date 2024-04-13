import mongoose from 'mongoose';
import { UserModel, IUserProps } from './user.model';
import { logger } from '../utils/logger';

describe('User Model Test', () => {
    beforeAll(async () => {
        await mongoose.connect(''); //TODO
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should create and save a new user', async () => {
        const userData: IUserProps = {
            name: 'John Doe',
            username: 'john_doe',
            email: 'john@example.com',
            password: 'password123'
        };

        try {
            const user = new UserModel(userData);
            const savedUser = await user.save();

            expect(savedUser._id).toBeDefined();
            expect(savedUser.name).toBe(userData.name);
            expect(savedUser.username).toBe(userData.username);
            expect(savedUser.email).toBe(userData.email);
            expect(savedUser.password).toBeDefined();
            expect(savedUser.isActive).toBe(true);
            expect(savedUser.gender).toBe(userData.gender);
            expect(savedUser.createdAt).toBeDefined();
            expect(savedUser.updatedAt).toBeDefined();
        } catch (error) {
            logger.error(error);
            throw error;
        }
    });
});
