import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Author } from 'entities/Author';

// @desc    Get all authors
// @route   GET /api/v1/authors
// @access  Public
export const authors_get_all = async (
  _: Request,
  res: Response
): Promise<Response> => {
  try {
    const qb = getRepository(Author)
      .createQueryBuilder('author')
      .leftJoin('author.books', 'books')
      .select(['author.name', 'books.id', 'books.title']);

    const [data] = await qb.getManyAndCount();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    Create new author
// @route   POST /api/v1/authors
// @access  Public
export const authors_create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await Author.save(req.body);

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

// @desc    Update existing author
// @route   PATCH /api/v1/authors/:id
// @access  Public
export const authors_update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const author = await Author.findOneOrFail(req.params.id);
    Object.assign(author, req.body);

    await author.save();

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

// @desc    Delete existing author
// @route   DELETE /api/v1/authors/:id
// @access  Public
export const authors_remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const author = await Author.findOneOrFail(req.body.id);
    await author.remove();

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
