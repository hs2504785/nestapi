import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  id: Number,
  folder: String,
  from: String,
  summary: String,
  full: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
