import { Router } from 'express';
import {
  authors_get_all,
  authors_create,
  authors_update,
  authors_remove,
} from 'controllers/authors.controller';

const router = Router();

router.get('/', authors_get_all);
router.post('/', authors_create);
router.patch('/:id', authors_update);
router.delete('/:id', authors_remove);

export default router;
