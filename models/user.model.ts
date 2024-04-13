import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { logger } from '../utils/logger';
import { IUserProps, UserSchema } from '../schemas/user.schema';
import { UserSchemaValidator } from '../validators/userSchema.dto';


UserSchema.pre('validate', async function(next) {
    try {
        await UserSchemaValidator.validateAsync(this.toObject());
        next();
    } catch (error) {
        logger.error(error); 
        throw error;
    }
});

UserSchema.pre('save', async function(next) {
    try {
        if (this.isModified('password')) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        logger.error(error); 
        throw error;
    }
});

const UserModel = mongoose.model<IUserProps>('User', UserSchema);

export { UserModel, IUserProps };
