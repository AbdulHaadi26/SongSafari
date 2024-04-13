import mongoose from 'mongoose';
import { logger } from './logger';

mongoose.connect(process.env.MONGO_URI ?? '')
    .then(() => {
        logger.info('Connected to MongoDB');
    })
    .catch(error => {
        logger.error('Error connecting to MongoDB:', error);
    });

export default mongoose;
