import { Joi, Segments } from 'celebrate';
import { TAGS } from '../constants/tags.js';
import { isValidObjectId } from 'mongoose';

const objectValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(30).required(),
    content: Joi.string().allow(''),
    tag: Joi.valid(...TAGS),
  }),
};

export const nodeIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectValidator).required(),
  }),
};
