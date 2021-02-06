import { Request, Response } from 'express';
import { Book } from 'entities/Book';

// @desc    Get all books
// @route   GET /api/v1/books
// @access  Public
export const books_get_all = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      success: true,
      data: books,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    Create new book
// @route   POST /api/v1/books
// @access  Public
export const books_create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await Book.save(req.body);

    return res.status(201).json({
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    Update existing book
// @route   PATCH /api/v1/books/:id
// @access  Public
export const books_update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const book = await Book.findOneOrFail(req.params.id);
    Object.assign(book, req.body);

    await book.save();

    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    Delete existing book
// @route   DELETE /api/v1/books/:id
// @access  Public
export const books_remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const book = await Book.findOneOrFail(req.body.id);
    await book.remove();

    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
