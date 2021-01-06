import { Router } from 'express';
import {
  books_get_all,
  books_create,
  books_update,
  books_remove,
} from 'controllers/books.controller';

const router = Router();

router.get('/', books_get_all);
router.post('/', books_create);
router.patch('/:id', books_update);
router.delete('/:id', books_remove);

export default router;
