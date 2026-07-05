import { model, Schema } from 'mongoose';

const titleSchema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    content: { type: String, require: false, trim: true },
    tag: {
      type: String,
      require: false,
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
    },
  },
  { timestamps: true },
);

export const Note = model('Note', titleSchema);
