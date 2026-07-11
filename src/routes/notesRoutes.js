import { Router } from 'express';
import {
  getNoteById,
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  nodeIdSchema,
} from '../validations/notesValidation.js';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', celebrate(nodeIdSchema), getNoteById);
router.post('/notes', celebrate(createNoteSchema), createNote);
router.delete('/notes/:noteId', celebrate(nodeIdSchema), deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;
