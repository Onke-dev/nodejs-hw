import { model, Schema } from 'mongoose';

const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    _content: { type: String, required: false, trim: true, default: '' },
    get content() {
      return this._content;
    },
    set content(value) {
      this._content = value;
    },
    tag: {
      type: String,
      required: false,
      default: 'Todo',
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

export const Note = model('Note', noteSchema);
