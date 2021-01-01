import { Router } from 'express';
import { books_get_all } from 'controllers/books.controller';

const router = Router();

router.get('/', books_get_all);

export default router;
