import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Book } from 'entities/Book';

// @desc    Get all books
// @route   GET /api/v1/books
// @access  Public
export const books_get_all = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    const books = await getRepository(Book).find();

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
