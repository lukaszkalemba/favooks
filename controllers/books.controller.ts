import { Request, Response } from 'express';

// @desc    Get all books
// @route   GET /api/v1/books
// @access  Public
export const books_get_all = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
      success: true,
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};