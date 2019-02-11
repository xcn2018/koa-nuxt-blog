import mongoose from 'mongoose';
import { dbPath } from '../config';

require('./schema/list');

export const database = () => {
  mongoose.set('debug', true);

  mongoose.connect(dbPath);

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(dbPath);
  });

  mongoose.connection.on('error', err => console.log(err));

  mongoose.connection.on('open', async () => console.log('mongo:', dbPath));
}

database()